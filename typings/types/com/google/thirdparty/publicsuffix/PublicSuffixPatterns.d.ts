import type { PublicSuffixType } from '../../../../com/google/thirdparty/publicsuffix/PublicSuffixType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PublicSuffixPatterns extends Object {
    static EXACT: { [key: string]: PublicSuffixType };
    static EXCLUDED: { [key: string]: PublicSuffixType };
    static UNDER: { [key: string]: PublicSuffixType };
    private constructor()
}