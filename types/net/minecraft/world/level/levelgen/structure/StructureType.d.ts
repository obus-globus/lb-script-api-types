import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Structure } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
export interface StructureType<S extends Structure> extends Object{
    codec(): MapCodec<S>;
}