import type { LSR } from '../../../../../com/ibm/icu/impl/locale/LSR.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LikelySubtags$Data extends Object {
    static load(): LikelySubtags$Data;
    constructor(arg0: { [key: string]: string }, arg1: { [key: string]: string }, arg2: number[], arg3: LSR[])
    languageAliases: { [key: string]: string };
    lsrs: LSR[];
    regionAliases: { [key: string]: string };
    trie: number[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}