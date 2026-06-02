import type { FilterInputStream } from '../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Checksum } from '../../../java/util/zip/Checksum.d.ts'
import type { LZ4BlockInputStream$Builder } from '../../../net/jpountz/lz4/LZ4BlockInputStream$Builder.d.ts'
import type { LZ4FastDecompressor } from '../../../net/jpountz/lz4/LZ4FastDecompressor.d.ts'
import type { LZ4SafeDecompressor } from '../../../net/jpountz/lz4/LZ4SafeDecompressor.d.ts'
export class LZ4BlockInputStream extends FilterInputStream {
    static newBuilder(): LZ4BlockInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    constructor(arg0: InputStream, arg1: LZ4FastDecompressor)
    constructor(arg0: InputStream, arg1: LZ4FastDecompressor, arg2: Checksum)
    constructor(arg0: InputStream, arg1: LZ4FastDecompressor, arg2: Checksum, arg3: boolean)
    private constructor(arg0: InputStream, arg1: LZ4FastDecompressor, arg2: LZ4SafeDecompressor, arg3: Checksum, arg4: boolean)
    // private buffer: number[];
    // private checksum: Checksum;
    // private compressedBuffer: number[];
    // private fastDecompressor: LZ4FastDecompressor;
    // private finished: boolean;
    // private o: number;
    // private originalLen: number;
    // private safeDecompressor: LZ4SafeDecompressor;
    // private stopOnEmptyBlock: boolean;
    available(): number;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readFully(arg0: number[], arg1: number): void;
    // private refill(): void;
    reset(): void;
    skip(arg0: number): number;
    toString(): string;
    // private tryReadFully(arg0: number[], arg1: number): boolean;
}