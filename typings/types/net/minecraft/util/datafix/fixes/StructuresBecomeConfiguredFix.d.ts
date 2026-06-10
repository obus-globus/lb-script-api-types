import type { DataFix } from '../../../../../com/mojang/datafixers/DataFix.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StructuresBecomeConfiguredFix$Conversion } from '../../../../../net/minecraft/util/datafix/fixes/StructuresBecomeConfiguredFix$Conversion.d.ts'
export class StructuresBecomeConfiguredFix extends DataFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Typed<Object>) => Typed<Object>, paramarg4: BitSet): RewriteResult<Object, Object>;
    constructor(outputSchema: Schema)
    // private findUpdatedStructureType(dynamicKey: Dynamic<Object>, chunk: Dynamic<Object>): Dynamic<Object>;
    // private fix(chunk: Dynamic<Object>): Dynamic<Object>;
    // private guessConfiguration(chunk: Dynamic<Object>, conversion: StructuresBecomeConfiguredFix$Conversion): Optional<string>;
    makeRule(): TypeRewriteRule;
    // private updateReferences(references: Dynamic<Object>, chunk: Dynamic<Object>): Dynamic<Object>;
    // private updateStarts(starts: Dynamic<Object>, chunk: Dynamic<Object>): Dynamic<Object>;
}