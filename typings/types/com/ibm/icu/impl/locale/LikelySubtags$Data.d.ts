import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { LSR } from '../../../../../com/ibm/icu/impl/locale/LSR.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LikelySubtags$Data extends Object {
    static load(): LikelySubtags$Data;
    constructor(arg0: JavaMap<string, string>, arg1: JavaMap<string, string>, arg2: number[], arg3: LSR[])
    languageAliases: JavaMap<string, string>;
    lsrs: LSR[];
    regionAliases: JavaMap<string, string>;
    trie: number[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}