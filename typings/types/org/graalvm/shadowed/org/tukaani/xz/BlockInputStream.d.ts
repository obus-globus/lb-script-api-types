import type { DataInputStream } from '../../../../../../java/io/DataInputStream.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { CountingInputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/CountingInputStream.d.ts'
import type { Check } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/check/Check.d.ts'
export class BlockInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(in_: InputStream, check: Check, verifyCheck: boolean, memoryLimit: number, unpaddedSizeInIndex: number, uncompressedSizeInIndex: number, arrayCache: ArrayCache)
    // private check: Check;
    // private compressedSizeInHeader: number;
    // private compressedSizeLimit: number;
    // private endReached: boolean;
    // private filterChain: InputStream;
    // private headerSize: number;
    // private inCounted: CountingInputStream;
    // private inData: DataInputStream;
    // private tempBuf: number[];
    readonly uncompressedSize: number;
    // private uncompressedSizeInHeader: number;
    // private verifyCheck: boolean;
    available(): number;
    close(): void;
    getUncompressedSize(): number;
    getUnpaddedSize(): number;
    read(): number;
    read(arg0: number[]): number;
    read(buf: number[], off: number, len: number): number;
    // private validate(): void;
}