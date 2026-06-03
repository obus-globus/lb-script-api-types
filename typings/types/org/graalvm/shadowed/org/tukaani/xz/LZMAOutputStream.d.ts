import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
import type { LZMA2Options } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/LZMA2Options.d.ts'
import type { LZEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/LZEncoder.d.ts'
import type { LZMAEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMAEncoder.d.ts'
import type { RangeEncoderToStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/rangecoder/RangeEncoderToStream.d.ts'
export class LZMAOutputStream extends FinishableOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: OutputStream, options: LZMA2Options, useEndMarker: boolean)
    private constructor(out: OutputStream, options: LZMA2Options, useHeader: boolean, useEndMarker: boolean, expectedUncompressedSize: number, arrayCache: ArrayCache)
    constructor(out: OutputStream, options: LZMA2Options, useEndMarker: boolean, arrayCache: ArrayCache)
    constructor(out: OutputStream, options: LZMA2Options, inputSize: number)
    constructor(out: OutputStream, options: LZMA2Options, inputSize: number, arrayCache: ArrayCache)
    // private arrayCache: ArrayCache;
    // private currentUncompressedSize: number;
    // private exception: IOException;
    // private expectedUncompressedSize: number;
    // private finished: boolean;
    // private lz: LZEncoder;
    // private lzma: LZMAEncoder;
    // private out: OutputStream;
    readonly props: number;
    // private rc: RangeEncoderToStream;
    // private tempBuf: number[];
    // private useEndMarker: boolean;
    close(): void;
    finish(): void;
    flush(): void;
    getProps(): number;
    getUncompressedSize(): number;
    write(arg0: number[]): void;
    write(buf: number[], off: number, len: number): void;
    write(b: number): void;
}