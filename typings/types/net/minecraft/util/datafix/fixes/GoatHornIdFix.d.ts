import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStackTagRemainderFix } from '../../../../../net/minecraft/util/datafix/fixes/ItemStackTagRemainderFix.d.ts'
export class GoatHornIdFix extends ItemStackTagRemainderFix {
    static checked<A extends unknown, B extends unknown>(paramarg0: string, paramarg1: Type<A>, paramarg2: Type<B>, paramarg3: (param0: Typed<Object>) => Typed<Object>, paramarg4: BitSet): RewriteResult<A, B>;
    static createFixer(paramitemStackType: Type<Object>, paramidFilter: (param0: string) => boolean, paramfixer: (param0: Typed<Object>) => Typed<Object>): (param0: Typed<Object>) => Typed<Object>;
    constructor(outputSchema: Schema)
    fixItemStackTag(tag: Typed<Object>): Typed<Object>;
    fixItemStackTag<T extends unknown>(tag: Dynamic<T>): Dynamic<T>;
}