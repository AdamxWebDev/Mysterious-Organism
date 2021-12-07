// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
const pAequorFactory = (number, base) => {
const pAequor = {
  _specimenNum: number,
  _dna: base,
  mutate() {
    const randomIndex = Math.floor(Math.random() * this._dna.length);
      let mutation = returnRandBase()
      while (this._dna[randomIndex] === mutation){
        mutation = returnRandBase()
      }  
    this._dna[randomIndex] = mutation
    return this._dna
  },

  compareDNA(obj) {
    let percentage = 0
    let value = 0
      for (i=0; i<base.length; i++){
        if (this._dna[i] === obj._dna[i]){
        value += 1}
      percentage = Math.floor((value/base.length) * 100)};
    return console.log(`Specimen #${this._specimenNum} and Specimen #${obj._specimenNum} have ${percentage}% DNA in common.`)
  },
  willLikelySurvive() {
    let value = 0
    let percentage = 0
    for (i=0; i< base.length; i++){
      if (this._dna[i] === "C" || this._dna[i] === "G"){
        value++
      }
      percentage = Math.floor((value/base.length)*100)
    }
    if (percentage >= 60){
      return true
    }
    else {
      return false
    };
  },
  complementStrand(){
    let newDNA = []
    for (i=0; i<this._dna.length; i++){
      switch (this._dna[i]) {
        case "A":
        newDNA.push("T");
        break;
        case "T":
        newDNA.push("A");
        break;
        case 'C':
        newDNA.push('G');
        break;
        case 'G':
        newDNA.push('C');
      }
    }
    return newDNA
  },
}
return pAequor
}
/* This section is for testing purposes. */
//let spec1 = pAequorFactory(1, mockUpStrand())
//let spec2 = pAequorFactory(2, mockUpStrand())
//console.log(spec1._dna)
//console.log(spec1.complementStrand())
//spec1.mutate()
//console.log(spec1._dna)
//console.log(spec1.compareDNA(spec2))
//console.log(spec1.willLikelySurvive())

const pAequorSampleArray = () => {
  const sampleArray = []
  let i = 0;
  let j = 0;
  do {
   i = i + 1;
  let tempSample = pAequorFactory(i, mockUpStrand())
  if (tempSample.willLikelySurvive() === true){
    j++
    sampleArray.push(tempSample)
  }
  } while (j < 30);
  return sampleArray
}
const pAequorSamples = pAequorSampleArray()
//console.log(pAequorSamples)




