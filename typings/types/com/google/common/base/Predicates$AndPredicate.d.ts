import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Predicates$AndPredicate<T extends Object | number | string | boolean> extends Object implements Predicate<T>, Serializable {
    private constructor(components: (param0: Object) => boolean[])
    // private components: (param0: Object) => boolean[];
    apply(t: T): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test(input: T): boolean;
    toString(): string;
}