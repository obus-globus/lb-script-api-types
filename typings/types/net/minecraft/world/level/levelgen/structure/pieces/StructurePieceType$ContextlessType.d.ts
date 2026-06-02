import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
import type { StructurePieceType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceType.d.ts'
export interface StructurePieceType$ContextlessType extends Object, StructurePieceType{
    load(tag: CompoundTag): StructurePiece;
    load(context: StructurePieceSerializationContext, tag: CompoundTag): StructurePiece;
}