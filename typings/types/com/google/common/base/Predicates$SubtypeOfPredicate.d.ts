import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Predicates$SubtypeOfPredicate extends Object implements Predicate<Class<Object>>, Serializable {
    private constructor(clazz: Class<Object>)
    // private clazz: Class<Object>;
    apply(input: Class<Object>): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test(input: Class<Object>): boolean;
    toString(): string;
}