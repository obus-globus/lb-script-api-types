import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BiomeSource } from '../../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
export class BiomeSources extends Object {
    static bootstrap(paramregistry: MapCodec<BiomeSource>[]): MapCodec<BiomeSource>;
    constructor()
}