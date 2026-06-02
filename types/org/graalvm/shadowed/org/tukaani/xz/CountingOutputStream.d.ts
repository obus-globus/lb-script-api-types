import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
export class CountingOutputStream extends FinishableOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: OutputStream)
    // private out: OutputStream;
    readonly size: number;
    close(): void;
    flush(): void;
    getSize(): number;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}