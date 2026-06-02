import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Predicates$OrPredicate<T extends Object | number | string | boolean> extends Object implements Predicate<T>, Serializable {
    private constructor(components: (param0: T) => kotlin.Boolean[])
    // private components: (param0: T) => kotlin.Boolean[];
    apply(t: T): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test(input: T): boolean;
    toString(): string;
}