import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Interner } from '../../../../com/google/common/collect/Interner.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Interners$InternerFunction<E extends Object | number | string | boolean> extends Object implements Function<E, E> {
    constructor(interner: Interner<E>)
    // private interner: Interner<E>;
    apply(input: E): E;
    equals(other: Object | null): boolean;
    hashCode(): number;
}