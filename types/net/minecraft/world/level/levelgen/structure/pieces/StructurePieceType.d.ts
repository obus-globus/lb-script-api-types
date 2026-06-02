import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
export interface StructurePieceType extends Object{
    load(context: StructurePieceSerializationContext, tag: CompoundTag): StructurePiece;
}