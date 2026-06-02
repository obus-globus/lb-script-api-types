import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { RegionFile } from '../../../../net/minecraft/world/level/chunk/storage/RegionFile.d.ts'
export class FileToUpgrade extends Record {
    constructor(file: RegionFile, chunksToUpgrade: ChunkPos[])
    // private chunksToUpgrade: ChunkPos[];
    // private file: RegionFile;
    chunksToUpgrade(): ChunkPos[];
    equals(o: Object | null): boolean;
    file(): RegionFile;
    hashCode(): number;
    toString(): string;
}