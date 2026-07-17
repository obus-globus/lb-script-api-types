import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Predicates$IsEqualToPredicate extends Object implements Predicate<Object>, Serializable {
    private constructor(target: Object)
    // private target: Object;
    apply(o: Object): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test(input: Object): boolean;
    toString(): string;
    withNarrowedType<T extends unknown>(): (param0: T) => boolean;
}