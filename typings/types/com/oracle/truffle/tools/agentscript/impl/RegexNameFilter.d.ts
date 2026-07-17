import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RegexNameFilter extends Object implements Predicate<string> {
    constructor(fn: string)
    // private regex: Pattern;
    and(arg0: (param0: string) => boolean): (param0: string) => boolean;
    negate(): (param0: string) => boolean;
    or(arg0: (param0: string) => boolean): (param0: string) => boolean;
    test(rootName: string): boolean;
}