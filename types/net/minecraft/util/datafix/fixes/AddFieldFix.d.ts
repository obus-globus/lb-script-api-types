import type { DSL$TypeReference } from '../../../../../com/mojang/datafixers/DSL$TypeReference.d.ts'
import type { DataFix } from '../../../../../com/mojang/datafixers/DataFix.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AddFieldFix extends DataFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Object | null) => Object | null, paramarg4: BitSet): RewriteResult<Object, Object>;
    constructor(outputSchema: Schema, type: DSL$TypeReference, fieldName: string, fieldGenerator: (param0: Dynamic<Object>) => Dynamic<Object>, path: string[])
    // private fieldGenerator: (param0: Dynamic<Object>) => Dynamic<Object>;
    // private fieldName: string;
    // private name: string;
    // private path: string[];
    // private type: DSL$TypeReference;
    // private addField(dynamic: Dynamic<Object>, pathIndex: number): Dynamic<Object>;
    makeRule(): TypeRewriteRule;
}