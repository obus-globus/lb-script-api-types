import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNameMatcher } from '../../../../../org/apache/commons/io/serialization/ClassNameMatcher.d.ts'
export class FullClassNameMatcher extends Object implements ClassNameMatcher {
    constructor(...arg0: string[])
    // private classesSet: string[];
    matches(arg0: string): boolean;
}