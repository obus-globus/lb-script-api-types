import type { ContractionsAndExpansions$CESink } from '../../../../com/ibm/icu/impl/coll/ContractionsAndExpansions$CESink.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollationElementIterator$MaxExpSink extends Object implements ContractionsAndExpansions$CESink {
    constructor(arg0: { [key: number]: number })
    // private maxExpansions: { [key: number]: number };
    handleCE(arg0: number): void;
    handleExpansion(arg0: number[], arg1: number, arg2: number): void;
}