import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StructurePoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructurePoolElement.d.ts'
export interface StructurePoolElementType<P extends StructurePoolElement> extends Object{
    codec(): MapCodec<P>;
}