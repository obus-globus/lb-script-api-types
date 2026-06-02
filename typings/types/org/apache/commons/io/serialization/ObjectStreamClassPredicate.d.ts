import type { ObjectStreamClass } from '../../../../../java/io/ObjectStreamClass.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNameMatcher } from '../../../../../org/apache/commons/io/serialization/ClassNameMatcher.d.ts'
export class ObjectStreamClassPredicate extends Object implements Predicate<ObjectStreamClass> {
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    constructor()
    // private acceptMatchers: (param0: string) => kotlin.Boolean[];
    // private rejectMatchers: (param0: string) => kotlin.Boolean[];
    accept(arg0: Pattern): ObjectStreamClassPredicate;
    accept(arg0: Class<Object>[]): ObjectStreamClassPredicate;
    accept(arg0: string[]): ObjectStreamClassPredicate;
    accept(arg0: (param0: string) => kotlin.Boolean): ObjectStreamClassPredicate;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    reject(arg0: Pattern): ObjectStreamClassPredicate;
    reject(arg0: Class<Object>[]): ObjectStreamClassPredicate;
    reject(arg0: string[]): ObjectStreamClassPredicate;
    reject(arg0: (param0: string) => kotlin.Boolean): ObjectStreamClassPredicate;
    test(arg0: ObjectStreamClass): boolean;
    test(arg0: string): boolean;
}