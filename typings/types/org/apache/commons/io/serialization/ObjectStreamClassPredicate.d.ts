import type { ObjectStreamClass } from '../../../../../java/io/ObjectStreamClass.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNameMatcher } from '../../../../../org/apache/commons/io/serialization/ClassNameMatcher.d.ts'
export class ObjectStreamClassPredicate extends Object implements Predicate<ObjectStreamClass> {
    constructor()
    // private acceptMatchers: (param0: string) => boolean[];
    // private rejectMatchers: (param0: string) => boolean[];
    accept(arg0: Pattern): ObjectStreamClassPredicate;
    accept(...arg0: Class<Object>[]): ObjectStreamClassPredicate;
    accept(...arg0: string[]): ObjectStreamClassPredicate;
    accept(arg0: (param0: string) => boolean): ObjectStreamClassPredicate;
    and(arg0: (param0: ObjectStreamClass) => boolean): (param0: ObjectStreamClass) => boolean;
    negate(): (param0: ObjectStreamClass) => boolean;
    or(arg0: (param0: ObjectStreamClass) => boolean): (param0: ObjectStreamClass) => boolean;
    reject(arg0: Pattern): ObjectStreamClassPredicate;
    reject(...arg0: Class<Object>[]): ObjectStreamClassPredicate;
    reject(...arg0: string[]): ObjectStreamClassPredicate;
    reject(arg0: (param0: string) => boolean): ObjectStreamClassPredicate;
    test(arg0: ObjectStreamClass): boolean;
    test(arg0: string): boolean;
}