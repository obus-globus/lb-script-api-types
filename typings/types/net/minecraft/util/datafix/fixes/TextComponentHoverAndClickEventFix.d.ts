import type { DataFix } from '../../../../../com/mojang/datafixers/DataFix.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TextComponentHoverAndClickEventFix extends DataFix {
    static checked<A extends unknown, B extends unknown>(paramarg0: string, paramarg1: Type<A>, paramarg2: Type<B>, paramarg3: (param0: Typed<Object>) => Typed<Object>, paramarg4: BitSet): RewriteResult<A, B>;
    constructor(outputSchema: Schema)
    // private createFixer<C1 extends unknown, C2 extends unknown, H extends Pair<string, Object>>(oldRawTextComponentType: Type<C1>, newTextComponentType: Type<C2>, hoverEventType: Type<H>): TypeRewriteRule;
    makeRule(): TypeRewriteRule;
}