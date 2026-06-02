import type { DataFix } from '../../../../../com/mojang/datafixers/DataFix.d.ts'
import type { OpticFinder } from '../../../../../com/mojang/datafixers/OpticFinder.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InlineBlockPosFormatFix extends DataFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Object | null) => Object | null, paramarg4: BitSet): RewriteResult<Object, Object>;
    constructor(outputSchema: Schema)
    // private entityFinder(choiceName: string): OpticFinder<Object>;
    // private fixBlockAttached(tag: Dynamic<Object>): Dynamic<Object>;
    // private fixLivingEntity(tag: Dynamic<Object>): Dynamic<Object>;
    // private fixPhantom(tag: Dynamic<Object>): Dynamic<Object>;
    // private fixPlayer(tag: Dynamic<Object>): Dynamic<Object>;
    // private fixTurtle(tag: Dynamic<Object>): Dynamic<Object>;
    // private fixVex(tag: Dynamic<Object>): Dynamic<Object>;
    makeRule(): TypeRewriteRule;
}