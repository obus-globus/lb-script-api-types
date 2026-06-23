import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Functions$ConstantFunction<E extends unknown> extends Object implements Function<Object, E>, Serializable {
    constructor(value: E)
    // private value: E;
    apply(from: Object): E;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}