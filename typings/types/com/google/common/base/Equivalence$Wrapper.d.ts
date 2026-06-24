import type { Equivalence$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Equivalence$Wrapper<T extends unknown> extends Object implements Serializable {
    constructor(arg0: Equivalence<Object>, arg1: Object, arg2: Equivalence$1)
    private constructor(equivalence: Equivalence<T>, reference: T)
    // private equivalence: Equivalence<T>;
    // private reference: T;
    equals(obj: Object | null): boolean;
    get(): T;
    hashCode(): number;
    toString(): string;
}