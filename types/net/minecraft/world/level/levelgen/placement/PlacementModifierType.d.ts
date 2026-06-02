import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PlacementModifier } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifier.d.ts'
export interface PlacementModifierType<P extends PlacementModifier> extends Object{
    codec(): MapCodec<P>;
}