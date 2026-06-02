import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { StreamTagVisitor } from '../../../../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { RegionFile } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionFile.d.ts'
import type { RegionStorageInfo } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
export class RegionFileStorage extends Object implements AutoCloseable {
    static ANVIL_EXTENSION: string;
    constructor(info: RegionStorageInfo, folder: Path[], sync: boolean)
    // private folder: Path[];
    // private info: RegionStorageInfo;
    // private regionCache: Long2ObjectLinkedOpenHashMap<RegionFile>;
    // private sync: boolean;
    close(): void;
    flush(): void;
    // private getRegionFile(pos: ChunkPos): RegionFile;
    info(): RegionStorageInfo;
    read(pos: ChunkPos): CompoundTag;
    scanChunk(pos: ChunkPos, scanner: StreamTagVisitor): void;
    write(pos: ChunkPos, value: CompoundTag): void;
}