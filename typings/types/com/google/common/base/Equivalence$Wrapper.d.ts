import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Equivalence$Wrapper<T extends Object | number | string | boolean> extends Object implements Serializable {
    private constructor(equivalence: Equivalence<T>, reference: T)
    // private equivalence: Equivalence<T>;
    // private reference: T;
    equals(obj: Object | null): boolean;
    get(): T;
    hashCode(): number;
    toString(): string;
}