import type { Escaper } from '../../../../../com/google/common/escape/Escaper.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentRemainderFix } from '../../../../../net/minecraft/util/datafix/fixes/DataComponentRemainderFix.d.ts'
export class LockComponentPredicateFix extends DataComponentRemainderFix {
    static ESCAPER: Escaper;
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Typed<Object>) => Typed<Object>, paramarg4: BitSet): RewriteResult<Object, Object>;
    static fixLock(paraminput: Dynamic<Object>): Dynamic<Object>;
    constructor(outputSchema: Schema)
    fixComponent<T extends unknown>(input: Dynamic<T>): Dynamic<T>;
}