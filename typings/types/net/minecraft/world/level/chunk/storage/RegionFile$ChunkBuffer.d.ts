import type { ByteArrayOutputStream } from '../../../../../../java/io/ByteArrayOutputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { RegionFile } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionFile.d.ts'
export class RegionFile$ChunkBuffer extends ByteArrayOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(null_: RegionFile, pos: ChunkPos)
    // private pos: ChunkPos;
    close(): void;
}