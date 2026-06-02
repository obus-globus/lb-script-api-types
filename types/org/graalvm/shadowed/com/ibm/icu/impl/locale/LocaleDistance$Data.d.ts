import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LSR } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LSR.d.ts'
export class LocaleDistance$Data extends Object {
    static load(): LocaleDistance$Data;
    constructor(trie: number[], regionToPartitionsIndex: number[], partitionArrays: string[], paradigmLSRs: LSR[], distances: number[])
    distances: number[];
    paradigmLSRs: LSR[];
    partitionArrays: string[];
    regionToPartitionsIndex: number[];
    trie: number[];
    equals(other: Object | null): boolean;
    hashCode(): number;
}