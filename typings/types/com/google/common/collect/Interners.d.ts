import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Interner } from '../../../../com/google/common/collect/Interner.d.ts'
import type { Interners$InternerBuilder } from '../../../../com/google/common/collect/Interners$InternerBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Interners extends Object {
    static asFunction(paraminterner: Interner<Object>): (param0: Object | null) => Object | null;
    static newBuilder(): Interners$InternerBuilder;
    static newStrongInterner(): Interner<Object>;
    static newWeakInterner(): Interner<Object>;
    private constructor()
}