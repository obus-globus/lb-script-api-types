import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { DeltaOptions } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/DeltaOptions.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
import type { DeltaEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/delta/DeltaEncoder.d.ts'
export class DeltaOutputStream extends FinishableOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: FinishableOutputStream, options: DeltaOptions)
    // private delta: DeltaEncoder;
    // private exception: IOException;
    // private filterBuf: number[];
    // private finished: boolean;
    // private out: FinishableOutputStream;
    // private tempBuf: number[];
    close(): void;
    finish(): void;
    flush(): void;
    write(arg0: number[]): void;
    write(buf: number[], off: number, len: number): void;
    write(b: number): void;
}