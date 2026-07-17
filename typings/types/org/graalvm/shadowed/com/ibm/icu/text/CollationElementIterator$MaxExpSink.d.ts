import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ContractionsAndExpansions$CESink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/ContractionsAndExpansions$CESink.d.ts'
export class CollationElementIterator$MaxExpSink extends Object implements ContractionsAndExpansions$CESink {
    constructor(h: JavaMap<number, number>)
    // private maxExpansions: JavaMap<number, number>;
    handleCE(ce: number): void;
    handleExpansion(ces: number[], start: number, length: number): void;
}