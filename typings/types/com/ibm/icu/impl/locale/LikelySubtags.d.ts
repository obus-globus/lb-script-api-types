import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { LSR } from '../../../../../com/ibm/icu/impl/locale/LSR.d.ts'
import type { LikelySubtags$Data } from '../../../../../com/ibm/icu/impl/locale/LikelySubtags$Data.d.ts'
import type { BytesTrie$Entry } from '../../../../../com/ibm/icu/util/BytesTrie$Entry.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Minimize } from '../../../../../com/ibm/icu/util/ULocale$Minimize.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LikelySubtags extends Object {
    static INSTANCE: LikelySubtags;
    static SKIP_SCRIPT: number;
    private constructor(arg0: LikelySubtags$Data)
    // private defaultLsrIndex: number;
    // private languageAliases: JavaMap<string, string>;
    // private lsrs: LSR[];
    // private regionAliases: JavaMap<string, string>;
    // private trie: BytesTrie$Entry[];
    // private trieFirstLetterStates: number[];
    // private trieUndState: number;
    // private trieUndZzzzState: number;
    canonicalize(arg0: ULocale): ULocale;
    compareLikely(arg0: LSR, arg1: LSR, arg2: number): number;
    // private getLikelyIndex(arg0: string, arg1: string): number;
    // private getTable(): JavaMap<string, LSR>;
    // private isMacroregion(arg0: string): boolean;
    // private makeMaximizedLsr(arg0: string, arg1: string, arg2: string, arg3: string, arg4: boolean): LSR;
    makeMaximizedLsrFrom(arg0: ULocale, arg1: boolean): LSR;
    makeMaximizedLsrFrom(arg0: Locale): LSR;
    // private maximize(arg0: string, arg1: string, arg2: string, arg3: boolean): LSR;
    minimizeSubtags(arg0: string, arg1: string, arg2: string, arg3: ULocale$Minimize): LSR;
    toString(): string;
}