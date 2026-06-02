import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HeightProvider } from '../../../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProvider.d.ts'
export interface HeightProviderType<P extends HeightProvider> extends Object{
    codec(): MapCodec<P>;
}