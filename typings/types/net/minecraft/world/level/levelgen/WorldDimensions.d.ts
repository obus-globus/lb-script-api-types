import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup } from '../../../../../net/minecraft/core/HolderLookup.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { ChunkGenerator } from '../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { DimensionType } from '../../../../../net/minecraft/world/level/dimension/DimensionType.d.ts'
import type { LevelStem } from '../../../../../net/minecraft/world/level/dimension/LevelStem.d.ts'
import type { WorldDimensions$Complete } from '../../../../../net/minecraft/world/level/levelgen/WorldDimensions$Complete.d.ts'
export class WorldDimensions extends Record {
    static CODEC: MapCodec<WorldDimensions>;
    static keysInOrder(paramknownKeys: ResourceKey<LevelStem>[]): Stream<ResourceKey<LevelStem>>;
    static withOverworld(paramdimensions: Map<ResourceKey<LevelStem>, LevelStem>, paramtype: Holder<DimensionType>, paramgenerator: ChunkGenerator): Map<ResourceKey<LevelStem>, LevelStem>;
    static withOverworld(paramdimensionTypes: HolderLookup<DimensionType>, paramdimensions: Map<ResourceKey<LevelStem>, LevelStem>, paramgenerator: ChunkGenerator): Map<ResourceKey<LevelStem>, LevelStem>;
    constructor(dimensions: Map<ResourceKey<LevelStem>, LevelStem>)
    constructor(registry: LevelStem[])
    // private dimensions: Map<ResourceKey<LevelStem>, LevelStem>;
    bake(baseDimensions: LevelStem[]): WorldDimensions$Complete;
    dimensions(): Map<ResourceKey<LevelStem>, LevelStem>;
    equals(o: Object | null): boolean;
    get(key: ResourceKey<LevelStem>): Optional<LevelStem>;
    hashCode(): number;
    isDebug(): boolean;
    levels(): ResourceKey<Level>[];
    overworld(): ChunkGenerator;
    replaceOverworldGenerator(registries: HolderLookup$Provider, generator: ChunkGenerator): WorldDimensions;
    toString(): string;
}