import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
import type { LZMA2Options } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/LZMA2Options.d.ts'
import type { LZEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/LZEncoder.d.ts'
import type { LZMAEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMAEncoder.d.ts'
import type { RangeEncoderToBuffer } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/rangecoder/RangeEncoderToBuffer.d.ts'
export class LZMA2OutputStream extends FinishableOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: FinishableOutputStream, options: LZMA2Options, arrayCache: ArrayCache)
    // private arrayCache: ArrayCache;
    // private chunkHeader: number[];
    // private dictResetNeeded: boolean;
    // private exception: IOException;
    // private finished: boolean;
    // private lz: LZEncoder;
    // private lzma: LZMAEncoder;
    // private out: FinishableOutputStream;
    // private pendingSize: number;
    // private props: number;
    // private propsNeeded: boolean;
    // private rc: RangeEncoderToBuffer;
    // private stateResetNeeded: boolean;
    // private tempBuf: number[];
    close(): void;
    finish(): void;
    flush(): void;
    write(buf: number[], off: number, len: number): void;
    write(b: number): void;
    // private writeChunk(): void;
    // private writeEndMarker(): void;
    // private writeLZMA(uncompressedSize: number, compressedSize: number): void;
    // private writeUncompressed(uncompressedSize: number): void;
}