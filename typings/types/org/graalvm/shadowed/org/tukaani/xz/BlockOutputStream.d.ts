import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { CountingOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/CountingOutputStream.d.ts'
import type { FilterEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterEncoder.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
import type { Check } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/check/Check.d.ts'
export class BlockOutputStream extends FinishableOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: OutputStream, filters: FilterEncoder[], check: Check, arrayCache: ArrayCache)
    // private check: Check;
    // private compressedSizeLimit: number;
    // private filterChain: FinishableOutputStream;
    // private headerSize: number;
    // private out: OutputStream;
    // private outCounted: CountingOutputStream;
    // private tempBuf: number[];
    readonly uncompressedSize: number;
    finish(): void;
    flush(): void;
    getUncompressedSize(): number;
    getUnpaddedSize(): number;
    // private validate(): void;
    write(buf: number[], off: number, len: number): void;
    write(b: number): void;
}