import type { RandomAccessFile } from '../../../java/io/RandomAccessFile.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Relay$Companion } from '../../../okhttp3/internal/cache2/Relay$Companion.d.ts'
import type { Lockable } from '../../../okhttp3/internal/concurrent/Lockable.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
export class Relay extends Object implements Lockable {
    static Companion: Relay$Companion;
    static PREFIX_CLEAN: ByteString;
    static PREFIX_DIRTY: ByteString;
    private constructor(file: RandomAccessFile | null, upstream: Source | null, upstreamPos: number, metadata: ByteString, bufferMaxSize: number)
    readonly buffer: Buffer;
    readonly bufferMaxSize: number;
    complete: boolean;
    file: RandomAccessFile | null;
    /*not mapped: */ isClosed(): boolean;
    // private metadata: ByteString;
    sourceCount: number;
    upstream: Source | null;
    readonly upstreamBuffer: Buffer;
    upstreamPos: number;
    upstreamReader: Thread | null;
    commit(upstreamSize: number): void;
    metadata(): ByteString;
    newSource(): Source | null;
    // private writeHeader(prefix: ByteString, upstreamSize: number, metadataSize: number): void;
    // private writeMetadata(upstreamSize: number): void;
}