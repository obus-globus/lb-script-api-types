import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RegexNameFilter extends Object implements Predicate<string> {
    static isEqual<T extends unknown>(paramarg0: Object): (param0: T) => boolean;
    static not<T extends unknown>(paramarg0: (param0: Object) => boolean): (param0: T) => boolean;
    constructor(fn: string)
    // private regex: Pattern;
    and(arg0: (param0: string) => boolean): (param0: string) => boolean;
    negate(): (param0: string) => boolean;
    or(arg0: (param0: string) => boolean): (param0: string) => boolean;
    test(rootName: string): boolean;
}