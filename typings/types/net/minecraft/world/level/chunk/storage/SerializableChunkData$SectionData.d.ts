import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DataLayer } from '../../../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
import type { LevelChunkSection } from '../../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
export class SerializableChunkData$SectionData extends Record {
    constructor(y: number, chunkSection: LevelChunkSection, blockLight: DataLayer, skyLight: DataLayer)
    // private blockLight: DataLayer;
    // private chunkSection: LevelChunkSection;
    // private skyLight: DataLayer;
    // private y: number;
    blockLight(): DataLayer;
    chunkSection(): LevelChunkSection;
    equals(o: Object | null): boolean;
    hashCode(): number;
    skyLight(): DataLayer;
    toString(): string;
    y(): number;
}