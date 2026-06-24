import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { PoiManager } from '../../../../../../net/minecraft/world/entity/ai/village/poi/PoiManager.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelHeightAccessor } from '../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { ChunkAccess } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkAccess$PackedTicks } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess$PackedTicks.d.ts'
import type { PalettedContainerFactory } from '../../../../../../net/minecraft/world/level/chunk/PalettedContainerFactory.d.ts'
import type { ProtoChunk } from '../../../../../../net/minecraft/world/level/chunk/ProtoChunk.d.ts'
import type { UpgradeData } from '../../../../../../net/minecraft/world/level/chunk/UpgradeData.d.ts'
import type { ChunkStatus } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { RegionStorageInfo } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
import type { SerializableChunkData$SectionData } from '../../../../../../net/minecraft/world/level/chunk/storage/SerializableChunkData$SectionData.d.ts'
import type { BelowZeroRetrogen } from '../../../../../../net/minecraft/world/level/levelgen/BelowZeroRetrogen.d.ts'
import type { Heightmap$Types } from '../../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { BlendingData$Packed } from '../../../../../../net/minecraft/world/level/levelgen/blending/BlendingData$Packed.d.ts'
export class SerializableChunkData extends Record {
    static BLOCK_LIGHT_TAG: string;
    static HEIGHTMAPS_TAG: string;
    static IS_LIGHT_ON_TAG: string;
    static SECTIONS_TAG: string;
    static SKY_LIGHT_TAG: string;
    static X_POS_TAG: string;
    static Z_POS_TAG: string;
    static copyOf(paramlevel: ServerLevel, paramchunk: ChunkAccess): SerializableChunkData;
    static getChunkStatusFromTag(paramtag: CompoundTag): ChunkStatus;
    static parse(paramlevelHeight: LevelHeightAccessor, paramcontainerFactory: PalettedContainerFactory, paramchunkData: CompoundTag): SerializableChunkData;
    constructor(containerFactory: PalettedContainerFactory, chunkPos: ChunkPos, minSectionY: number, lastUpdateTime: number, inhabitedTime: number, chunkStatus: ChunkStatus, blendingData: BlendingData$Packed, belowZeroRetrogen: BelowZeroRetrogen, upgradeData: UpgradeData, carvingMask: number[], heightmaps: { [key in Heightmap$Types]: number[] }, packedTicks: ChunkAccess$PackedTicks, postProcessingSections: (Object | null)[][], lightCorrect: boolean, sectionData: SerializableChunkData$SectionData[], entities: CompoundTag[], blockEntities: CompoundTag[], structureData: CompoundTag)
    // private attachmentNbtData: CompoundTag;
    // private belowZeroRetrogen: BelowZeroRetrogen;
    // private blendingData: BlendingData$Packed;
    // private blockEntities: CompoundTag[];
    // private carvingMask: number[];
    // private chunkPos: ChunkPos;
    // private chunkStatus: ChunkStatus;
    // private containerFactory: PalettedContainerFactory;
    // private entities: CompoundTag[];
    // private heightmaps: { [key in Heightmap$Types]: number[] };
    // private inhabitedTime: number;
    // private lastUpdateTime: number;
    // private lightCorrect: boolean;
    // private minSectionY: number;
    // private packedTicks: ChunkAccess$PackedTicks;
    // private postProcessingSections: (Object | null)[][];
    // private sectionData: SerializableChunkData$SectionData[];
    // private structureData: CompoundTag;
    // private upgradeData: UpgradeData;
    belowZeroRetrogen(): BelowZeroRetrogen;
    blendingData(): BlendingData$Packed;
    blockEntities(): CompoundTag[];
    carvingMask(): number[];
    chunkPos(): ChunkPos;
    chunkStatus(): ChunkStatus;
    containerFactory(): PalettedContainerFactory;
    entities(): CompoundTag[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    heightmaps(): { [key in Heightmap$Types]: number[] };
    inhabitedTime(): number;
    lastUpdateTime(): number;
    lightCorrect(): boolean;
    minSectionY(): number;
    packedTicks(): ChunkAccess$PackedTicks;
    postProcessingSections(): (Object | null)[][];
    read(level: ServerLevel, poiManager: PoiManager, regionInfo: RegionStorageInfo, pos: ChunkPos): ProtoChunk;
    sectionData(): SerializableChunkData$SectionData[];
    structureData(): CompoundTag;
    toString(): string;
    upgradeData(): UpgradeData;
    write(): CompoundTag;
}