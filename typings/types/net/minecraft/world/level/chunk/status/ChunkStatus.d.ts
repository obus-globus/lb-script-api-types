import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChunkType } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkType.d.ts'
import type { Heightmap$Types } from '../../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
export class ChunkStatus extends Object {
    static BIOMES: ChunkStatus;
    static CARVERS: ChunkStatus;
    static CODEC: Codec<ChunkStatus>;
    static EMPTY: ChunkStatus;
    static FEATURES: ChunkStatus;
    static FINAL_HEIGHTMAPS: Heightmap$Types[];
    static FULL: ChunkStatus;
    static INITIALIZE_LIGHT: ChunkStatus;
    static LIGHT: ChunkStatus;
    static MAX_STRUCTURE_DISTANCE: number;
    static NOISE: ChunkStatus;
    static SPAWN: ChunkStatus;
    static STRUCTURE_REFERENCES: ChunkStatus;
    static STRUCTURE_STARTS: ChunkStatus;
    static SURFACE: ChunkStatus;
    static byName(paramkey: string): ChunkStatus;
    static getStatusList(): ChunkStatus[];
    static max(parama: ChunkStatus, paramb: ChunkStatus): ChunkStatus;
    constructor(parent: ChunkStatus, heightmapsAfter: Heightmap$Types[], chunkType: ChunkType)
    readonly chunkType: ChunkType;
    // private heightmapsAfter: Heightmap$Types[];
    readonly index: number;
    readonly parent: ChunkStatus;
    getChunkType(): ChunkType;
    getIndex(): number;
    getName(): string;
    getParent(): ChunkStatus;
    heightmapsAfter(): Heightmap$Types[];
    isAfter(step: ChunkStatus): boolean;
    isBefore(step: ChunkStatus): boolean;
    isOrAfter(step: ChunkStatus): boolean;
    isOrBefore(step: ChunkStatus): boolean;
    toString(): string;
}