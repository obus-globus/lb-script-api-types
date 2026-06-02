import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
export class FinishableWrapperOutputStream extends FinishableOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: OutputStream)
    // private out: OutputStream;
    close(): void;
    flush(): void;
    write(buf: number[]): void;
    write(buf: number[], off: number, len: number): void;
    write(b: number): void;
}