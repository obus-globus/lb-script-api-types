import type { DataFix } from '../../../../../com/mojang/datafixers/DataFix.d.ts'
import type { OpticFinder } from '../../../../../com/mojang/datafixers/OpticFinder.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RemoveBlockEntityTagFix extends DataFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Typed<Object>) => Typed<Object>, paramarg4: BitSet): RewriteResult<Object, Object>;
    constructor(outputSchema: Schema, useLegacyDataStructure: boolean, blockEntityIdsToDrop: string[])
    constructor(outputSchema: Schema, blockEntityIdsToDrop: string[])
    // private blockEntityIdsToDrop: string[];
    // private useLegacyDataStructure: boolean;
    // private createChunkBlockEntityRemover(blockEntityIdF: OpticFinder<string>): TypeRewriteRule;
    // private createFallingBlockBlockEntityRemover(blockEntityIdF: OpticFinder<string>): TypeRewriteRule;
    // private createItemBlockEntityRemover(blockEntityIdF: OpticFinder<string>, itemTagOrComponentKey: string, itemBlockEntityDataKey: string): TypeRewriteRule;
    // private createStructureBlockEntityRemover(blockEntityIdF: OpticFinder<string>): TypeRewriteRule;
    // private createUncheckedConverterHack(): TypeRewriteRule;
    makeRule(): TypeRewriteRule;
    // private removeBlockEntity(tag: Typed<Object>, blockEntityF: OpticFinder<Object>, blockEntityIdF: OpticFinder<string>, blockEntityFieldName: string): Typed<Object>;
}