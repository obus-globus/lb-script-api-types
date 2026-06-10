import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkGenerator } from '../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
export class ChunkGenerators extends Object {
    static bootstrap(paramregistry: MapCodec<ChunkGenerator>[]): MapCodec<ChunkGenerator>;
    constructor()
}