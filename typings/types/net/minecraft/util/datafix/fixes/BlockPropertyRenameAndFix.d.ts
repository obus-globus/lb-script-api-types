import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractBlockPropertyFix } from '../../../../../net/minecraft/util/datafix/fixes/AbstractBlockPropertyFix.d.ts'
export class BlockPropertyRenameAndFix extends AbstractBlockPropertyFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Typed<Object>) => Typed<Object>, paramarg4: BitSet): RewriteResult<Object, Object>;
    constructor(outputSchema: Schema, name: string, blockId: string, oldPropertyName: string, newPropertyName: string, valueFixer: (param0: string) => Object | null)
    // private blockId: string;
    // private newPropertyName: string;
    // private oldPropertyName: string;
    // private valueFixer: (param0: string) => Object | null;
    fixProperties<T extends unknown>(blockId: string, properties: Dynamic<T>): Dynamic<T>;
    shouldFix(blockId: string): boolean;
}