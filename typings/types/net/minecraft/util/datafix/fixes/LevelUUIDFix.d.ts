import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractUUIDFix } from '../../../../../net/minecraft/util/datafix/fixes/AbstractUUIDFix.d.ts'
export class LevelUUIDFix extends AbstractUUIDFix {
    static checked<A extends unknown, B extends unknown>(paramarg0: string, paramarg1: Type<A>, paramarg2: Type<B>, paramarg3: (param0: Typed<Object>) => Typed<Object>, paramarg4: BitSet): RewriteResult<A, B>;
    constructor(outputSchema: Schema)
    makeRule(): TypeRewriteRule;
    // private updateCustomBossEvent(tag: Dynamic<Object>): Dynamic<Object>;
    // private updateDragonFight(tag: Dynamic<Object>): Dynamic<Object>;
    // private updateWanderingTrader(tag: Dynamic<Object>): Dynamic<Object>;
}