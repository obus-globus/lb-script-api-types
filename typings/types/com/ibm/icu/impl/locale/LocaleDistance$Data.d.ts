import type { LSR } from '../../../../../com/ibm/icu/impl/locale/LSR.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LocaleDistance$Data extends Object {
    static load(): LocaleDistance$Data;
    constructor(arg0: number[], arg1: number[], arg2: string[], arg3: LSR[], arg4: number[])
    distances: number[];
    paradigmLSRs: LSR[];
    partitionArrays: string[];
    regionToPartitionsIndex: number[];
    trie: number[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}