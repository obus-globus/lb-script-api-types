import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ContractionsAndExpansions$CESink } from '../../../../com/ibm/icu/impl/coll/ContractionsAndExpansions$CESink.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollationElementIterator$MaxExpSink extends Object implements ContractionsAndExpansions$CESink {
    constructor(arg0: JavaMap<number, number>)
    // private maxExpansions: JavaMap<number, number>;
    handleCE(arg0: number): void;
    handleExpansion(arg0: number[], arg1: number, arg2: number): void;
}