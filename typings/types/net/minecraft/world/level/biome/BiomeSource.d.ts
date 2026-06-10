import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LevelReader } from '../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeResolver } from '../../../../../net/minecraft/world/level/biome/BiomeResolver.d.ts'
import type { Climate$Sampler } from '../../../../../net/minecraft/world/level/biome/Climate$Sampler.d.ts'
export abstract class BiomeSource extends Object implements BiomeResolver {
    static CODEC: Codec<BiomeSource>;
    constructor()
    // private possibleBiomes: () => Holder<Biome>[];
    addDebugInfo(result: string[], feetPos: BlockPos, sampler: Climate$Sampler): void;
    codec(): MapCodec<BiomeSource>;
    collectPossibleBiomes(): Stream<Holder<Biome>>;
    findBiomeHorizontal(x: number, y: number, z: number, searchRadius: number, allowed: (param0: Holder<Biome>) => boolean, random: RandomSource, sampler: Climate$Sampler): Pair<BlockPos, Holder<Biome>>;
    findBiomeHorizontal(originX: number, originY: number, originZ: number, searchRadius: number, skipSteps: number, allowed: (param0: Holder<Biome>) => boolean, random: RandomSource, findClosest: boolean, sampler: Climate$Sampler): Pair<BlockPos, Holder<Biome>>;
    findClosestBiome3d(origin: BlockPos, searchRadius: number, sampleResolutionHorizontal: number, sampleResolutionVertical: number, allowed: (param0: Holder<Biome>) => boolean, sampler: Climate$Sampler, level: LevelReader): Pair<BlockPos, Holder<Biome>>;
    getBiomesWithin(x: number, y: number, z: number, r: number, sampler: Climate$Sampler): Holder<Biome>[];
    getNoiseBiome(quartX: number, quartY: number, quartZ: number, sampler: Climate$Sampler): Holder<Biome>;
    modifyBiomeSet(arg0: (Object | null)[]): (Object | null)[];
    possibleBiomes(): Holder<Biome>[];
}