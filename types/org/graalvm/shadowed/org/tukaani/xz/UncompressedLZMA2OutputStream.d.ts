import type { DataOutputStream } from '../../../../../../java/io/DataOutputStream.d.ts'
import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
export class UncompressedLZMA2OutputStream extends FinishableOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: FinishableOutputStream, arrayCache: ArrayCache)
    // private arrayCache: ArrayCache;
    // private dictResetNeeded: boolean;
    // private exception: IOException;
    // private finished: boolean;
    // private out: FinishableOutputStream;
    // private outData: DataOutputStream;
    // private tempBuf: number[];
    // private uncompBuf: number[];
    // private uncompPos: number;
    close(): void;
    finish(): void;
    flush(): void;
    write(buf: number[], off: number, len: number): void;
    write(b: number): void;
    // private writeChunk(): void;
    // private writeEndMarker(): void;
}