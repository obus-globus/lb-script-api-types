import type { DataFix } from '../../../../../com/mojang/datafixers/DataFix.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EntityBlockStateFix extends DataFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Object | null) => Object | null, paramarg4: BitSet): RewriteResult<Object, Object>;
    static getBlockId(paramname: string): number;
    constructor(outputSchema: Schema, changesType: boolean)
    makeRule(): TypeRewriteRule;
    // private updateBlockToBlockState(input: Typed<Object>, oldFieldName: string, dataName: string, newFieldName: string): Typed<Object>;
    // private updateEntity(input: Typed<Object>, name: string, function_: (param0: Typed<Object>) => Typed<Object>): Typed<Object>;
    // private updateFallingBlock(input: Typed<Object>): Typed<Object>;
}