import type { FilterOutputStream } from '../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Checksum } from '../../../java/util/zip/Checksum.d.ts'
import type { LZ4Compressor } from '../../../net/jpountz/lz4/LZ4Compressor.d.ts'
export class LZ4BlockOutputStream extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: number)
    constructor(arg0: OutputStream, arg1: number, arg2: LZ4Compressor)
    constructor(arg0: OutputStream, arg1: number, arg2: LZ4Compressor, arg3: Checksum, arg4: boolean)
    // private blockSize: number;
    // private buffer: number[];
    // private checksum: Checksum;
    // private compressedBuffer: number[];
    // private compressionLevel: number;
    // private compressor: LZ4Compressor;
    // private finished: boolean;
    // private o: number;
    // private syncFlush: boolean;
    close(): void;
    // private ensureNotFinished(): void;
    finish(): void;
    flush(): void;
    // private flushBufferedData(): void;
    toString(): string;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}