import type { Pattern } from '../../../../../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
export class RegexMatcher extends Object {
    static parse(paramarg0: string): RegexMatcher;
    private constructor(arg0: Pattern, arg1: Pattern, arg2: Pattern)
    // private desc: Pattern;
    // private name: Pattern;
    // private owner: Pattern;
    matches(arg0: string, arg1: string, arg2: string): boolean;
    // private matches0(arg0: string, arg1: Pattern): boolean;
}