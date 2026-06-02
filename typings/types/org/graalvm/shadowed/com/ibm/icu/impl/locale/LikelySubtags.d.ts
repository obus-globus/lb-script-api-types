import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LSR } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LSR.d.ts'
import type { LikelySubtags$Data } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LikelySubtags$Data.d.ts'
import type { BytesTrie$Entry } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/BytesTrie$Entry.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Minimize } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$Minimize.d.ts'
export class LikelySubtags extends Object {
    static INSTANCE: LikelySubtags;
    static SKIP_SCRIPT: number;
    private constructor(data: LikelySubtags$Data)
    // private defaultLsrIndex: number;
    // private languageAliases: { [key: string]: string };
    // private lsrs: LSR[];
    // private regionAliases: { [key: string]: string };
    // private trie: BytesTrie$Entry[];
    // private trieFirstLetterStates: number[];
    // private trieUndState: number;
    // private trieUndZzzzState: number;
    canonicalize(locale: ULocale): ULocale;
    compareLikely(lsr: LSR, other: LSR, likelyInfo: number): number;
    // private getLikelyIndex(language: string, script: string): number;
    // private getTable(): { [key: string]: LSR };
    // private isMacroregion(region: string): boolean;
    // private makeMaximizedLsr(language: string, script: string, region: string, variant: string, returnInputIfUnmatch: boolean): LSR;
    makeMaximizedLsrFrom(locale: Locale): LSR;
    makeMaximizedLsrFrom(locale: ULocale, returnInputIfUnmatch: boolean): LSR;
    // private maximize(language: string, script: string, region: string, returnInputIfUnmatch: boolean): LSR;
    minimizeSubtags(languageIn: string, scriptIn: string, regionIn: string, fieldToFavor: ULocale$Minimize): LSR;
    toString(): string;
}