import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LSR } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LSR.d.ts'
export class LikelySubtags$Data extends Object {
    static load(): LikelySubtags$Data;
    constructor(languageAliases: JavaMap<string, string>, regionAliases: JavaMap<string, string>, trie: number[], lsrs: LSR[])
    languageAliases: JavaMap<string, string>;
    lsrs: LSR[];
    regionAliases: JavaMap<string, string>;
    trie: number[];
    equals(other: Object | null): boolean;
    hashCode(): number;
}