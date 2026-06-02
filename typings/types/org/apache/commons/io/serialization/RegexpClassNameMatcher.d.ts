import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNameMatcher } from '../../../../../org/apache/commons/io/serialization/ClassNameMatcher.d.ts'
export class RegexpClassNameMatcher extends Object implements ClassNameMatcher {
    constructor(arg0: Pattern)
    constructor(arg0: string)
    // private pattern: Pattern;
    matches(arg0: string): boolean;
}