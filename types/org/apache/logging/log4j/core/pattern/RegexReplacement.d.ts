import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RegexReplacement extends Object {
    static createRegexReplacement(paramregex: Pattern, paramreplacement: string): RegexReplacement;
    private constructor(pattern: Pattern, substitution: string)
    // private pattern: Pattern;
    // private substitution: string;
    format(msg: string): string;
    toString(): string;
}