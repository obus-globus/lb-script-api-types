import type { Matcher } from '../../../../java/util/regex/Matcher.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class RegExUtils extends Object {
    static dotAll(paramarg0: string): Pattern;
    static dotAllMatcher(paramarg0: string, paramarg1: CharSequence): Matcher;
    static dotAllMatcher(paramarg0: string, paramarg1: string): Matcher;
    static removeAll(paramarg0: CharSequence, paramarg1: Pattern): string;
    static removeAll(paramarg0: string, paramarg1: string): string;
    static removeAll(paramarg0: string, paramarg1: Pattern): string;
    static removeFirst(paramarg0: CharSequence, paramarg1: Pattern): string;
    static removeFirst(paramarg0: string, paramarg1: string): string;
    static removeFirst(paramarg0: string, paramarg1: Pattern): string;
    static removePattern(paramarg0: CharSequence, paramarg1: string): string;
    static removePattern(paramarg0: string, paramarg1: string): string;
    static replaceAll(paramarg0: CharSequence, paramarg1: Pattern, paramarg2: string): string;
    static replaceAll(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static replaceAll(paramarg0: string, paramarg1: Pattern, paramarg2: string): string;
    static replaceFirst(paramarg0: CharSequence, paramarg1: Pattern, paramarg2: string): string;
    static replaceFirst(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static replaceFirst(paramarg0: string, paramarg1: Pattern, paramarg2: string): string;
    static replacePattern(paramarg0: CharSequence, paramarg1: string, paramarg2: string): string;
    static replacePattern(paramarg0: string, paramarg1: string, paramarg2: string): string;
    constructor()
}