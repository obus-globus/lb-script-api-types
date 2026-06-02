import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ChunkGenerator } from '../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { DimensionType } from '../../../../../net/minecraft/world/level/dimension/DimensionType.d.ts'
export class LevelStem extends Record {
    static CODEC: Codec<LevelStem>;
    static END: ResourceKey<LevelStem>;
    static NETHER: ResourceKey<LevelStem>;
    static OVERWORLD: ResourceKey<LevelStem>;
    constructor(type: Holder<DimensionType>, generator: ChunkGenerator)
    // private generator: ChunkGenerator;
    // private type: Holder<DimensionType>;
    equals(o: Object | null): boolean;
    generator(): ChunkGenerator;
    hashCode(): number;
    toString(): string;
    type(): Holder<DimensionType>;
}