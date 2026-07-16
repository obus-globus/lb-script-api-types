import type { DataInputStream } from '../../../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../../../java/io/DataOutputStream.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../../../java/nio/IntBuffer.d.ts'
import type { FileChannel } from '../../../../../../java/nio/channels/FileChannel.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { RegionBitmap } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionBitmap.d.ts'
import type { RegionFile$CommitOp } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionFile$CommitOp.d.ts'
import type { RegionFileVersion } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionFileVersion.d.ts'
import type { RegionStorageInfo } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
export class RegionFile extends Object implements AutoCloseable {
    constructor(info: RegionStorageInfo, path: Path, externalFileDir: Path, sync: boolean)
    constructor(info: RegionStorageInfo, path: Path, externalFileDir: Path, version: RegionFileVersion, sync: boolean)
    // private externalFileDir: Path;
    // private file: FileChannel;
    // private header: ByteBuffer;
    // private info: RegionStorageInfo;
    // private offsets: IntBuffer;
    readonly path: Path;
    // private timestamps: IntBuffer;
    // private usedSectors: RegionBitmap;
    // private version: RegionFileVersion;
    clear(pos: ChunkPos): void;
    close(): void;
    // private createChunkInputStream(pos: ChunkPos, versionId: number, chunkStream: InputStream): DataInputStream;
    // private createExternalChunkInputStream(pos: ChunkPos, versionId: number): DataInputStream;
    // private createExternalStub(): ByteBuffer;
    doesChunkExist(pos: ChunkPos): boolean;
    flush(): void;
    getChunkDataInputStream(pos: ChunkPos): DataInputStream;
    getChunkDataOutputStream(pos: ChunkPos): DataOutputStream;
    // private getExternalChunkPath(pos: ChunkPos): Path;
    // private getOffset(pos: ChunkPos): number;
    getPath(): Path;
    hasChunk(pos: ChunkPos): boolean;
    // private packSectorOffset(index: number, size: number): number;
    // private padToFullSector(): void;
    write(pos: ChunkPos, data: ByteBuffer): void;
    // private writeHeader(): void;
    // private writeToExternalFile(path: Path, data: ByteBuffer): RegionFile$CommitOp;
}