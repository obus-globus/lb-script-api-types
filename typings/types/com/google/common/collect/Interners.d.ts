import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Interner } from '../../../../com/google/common/collect/Interner.d.ts'
import type { Interners$InternerBuilder } from '../../../../com/google/common/collect/Interners$InternerBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Interners extends Object {
    static asFunction<E extends unknown>(paraminterner: Interner<E>): (param0: E) => E;
    static newBuilder(): Interners$InternerBuilder;
    static newStrongInterner<E extends unknown>(): Interner<E>;
    static newWeakInterner<E extends unknown>(): Interner<E>;
    private constructor()
}