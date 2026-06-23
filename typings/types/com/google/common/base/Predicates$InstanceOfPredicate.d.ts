import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Predicates$InstanceOfPredicate<T extends unknown> extends Object implements Predicate<T>, Serializable {
    private constructor(clazz: Class<Object>)
    // private clazz: Class<Object>;
    apply(o: T): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test(input: T): boolean;
    toString(): string;
}