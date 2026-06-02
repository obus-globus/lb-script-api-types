import type { DataFix } from '../../../../../com/mojang/datafixers/DataFix.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlockEntityRenameFix extends DataFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Object | null) => Object | null, paramarg4: BitSet): RewriteResult<Object, Object>;
    static create(paramoutputSchema: Schema, paramname: string, paramnameChangeLookup: (param0: string) => unknown): DataFix;
    private constructor(outputSchema: Schema, name: string, nameChangeLookup: (param0: string) => unknown)
    // private name: string;
    // private nameChangeLookup: (param0: string) => unknown;
    makeRule(): TypeRewriteRule;
}