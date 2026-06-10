import type { DataFix } from '../../../../../com/mojang/datafixers/DataFix.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkProtoTickListFix$PoorMansPalettedContainer } from '../../../../../net/minecraft/util/datafix/fixes/ChunkProtoTickListFix$PoorMansPalettedContainer.d.ts'
export class ChunkProtoTickListFix extends DataFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Typed<Object>) => Typed<Object>, paramarg4: BitSet): RewriteResult<Object, Object>;
    constructor(outputSchema: Schema)
    // private createTick(tag: Dynamic<Object>, container: () => ChunkProtoTickListFix$PoorMansPalettedContainer, sectionX: number, sectionY: number, sectionZ: number, pos: number, typeGetter: (param0: Dynamic<Object>) => string): Dynamic<Object>;
    makeRule(): TypeRewriteRule;
    // private makeTickList(tag: Dynamic<Object>, palettedContainers: Int2ObjectMap<() => ChunkProtoTickListFix$PoorMansPalettedContainer>, sectionMinY: number, sectionX: number, sectionZ: number, protoTickListTag: string, typeGetter: (param0: Dynamic<Object>) => string): Dynamic<Object>;
}