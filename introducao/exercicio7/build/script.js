"use strict";
let sequenceDna = `ATT GCT GCG CAT TAA CGA CGC GTA`;
function dnaToRna(sequence) {
    let newSequence = sequence.toUpperCase();
    newSequence = sequence.replaceAll('A', 'U').replaceAll('T', 'A').replaceAll('C', 'Y').replaceAll('G', 'Z');
    newSequence = newSequence.replaceAll('Y', 'G').replaceAll('Z', 'C');
    newSequence = newSequence.toUpperCase();
    return newSequence;
}
let sequenceRna = dnaToRna(sequenceDna);
console.log(sequenceRna);
//# sourceMappingURL=script.js.map