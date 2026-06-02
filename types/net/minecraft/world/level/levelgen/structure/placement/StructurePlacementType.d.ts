import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StructurePlacement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement.d.ts'
export interface StructurePlacementType<SP extends StructurePlacement> extends Object{
    codec(): MapCodec<SP>;
}