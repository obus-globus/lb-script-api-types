import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { CRC32 } from '../../../../../../java/util/zip/CRC32.d.ts'
import type { Deflater } from '../../../../../../java/util/zip/Deflater.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScatterGatherBackingStore } from '../../../../../../org/apache/commons/compress/parallel/ScatterGatherBackingStore.d.ts'
export abstract class StreamCompressor extends Object implements Closeable {
    static create(paramarg0: number, paramarg1: ScatterGatherBackingStore): StreamCompressor;
    static create(paramarg0: ScatterGatherBackingStore): StreamCompressor;
    constructor(arg0: Deflater)
    // private crc: CRC32;
    // private deflater: Deflater;
    // private outputBuffer: number[];
    // private readerBuf: number[];
    // private sourcePayloadLength: number;
    // private totalWrittenToOutputStream: number;
    // private writtenToOutputStreamForLastEntry: number;
    close(): void;
    deflate(): void;
    deflate(arg0: InputStream, arg1: number): void;
    // private deflateUntilInputIsNeeded(): void;
    flushDeflater(): void;
    getBytesRead(): number;
    getBytesWrittenForLastEntry(): number;
    getCrc32(): number;
    getTotalBytesWritten(): number;
    reset(): void;
    write(arg0: number[], arg1: number, arg2: number, arg3: number): number;
    writeCounted(arg0: number[]): void;
    writeCounted(arg0: number[], arg1: number, arg2: number): void;
    // private writeDeflated(arg0: number[], arg1: number, arg2: number): void;
    writeOut(arg0: number[], arg1: number, arg2: number): void;
}