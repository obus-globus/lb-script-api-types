import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { BiomeResolver } from '../../../../../net/minecraft/world/level/biome/BiomeResolver.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ProtoChunk } from '../../../../../net/minecraft/world/level/chunk/ProtoChunk.d.ts'
import type { ChunkStatus } from '../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
export class BelowZeroRetrogen extends Object {
    static CODEC: Codec<BelowZeroRetrogen>;
    static UPGRADE_HEIGHT_ACCESSOR: LevelHeightAccessor;
    static getBiomeResolver(parambiomeResolver: BiomeResolver, paramprotoChunk: ChunkAccess): BiomeResolver;
    static replaceOldBedrock(paramchunk: ProtoChunk): void;
    private constructor(targetStatus: ChunkStatus, missingBedrock: Optional<BitSet>)
    // private missingBedrock: BitSet;
    // private targetStatus: ChunkStatus;
    applyBedrockMask(chunk: ProtoChunk): void;
    hasBedrockHole(x: number, z: number): boolean;
    hasBedrockHoles(): boolean;
    targetStatus(): ChunkStatus;
}