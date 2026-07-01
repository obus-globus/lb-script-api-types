import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Equivalence$Wrapper<T extends unknown> extends Object implements Serializable {
    constructor(arg0: Equivalence<Object>, arg1: Object, arg2: any)
    // private equivalence: Equivalence<T>;
    // private reference: T;
    equals(obj: Object | null): boolean;
    get(): T;
    hashCode(): number;
    toString(): string;
}