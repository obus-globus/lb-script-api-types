import type { ByteArrayOutputStream } from '../../../../../../java/io/ByteArrayOutputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class RegionFile$ChunkBuffer extends ByteArrayOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(null_: RegionFile$ChunkBuffer, pos: ChunkPos)
    // private pos: ChunkPos;
    close(): void;
}