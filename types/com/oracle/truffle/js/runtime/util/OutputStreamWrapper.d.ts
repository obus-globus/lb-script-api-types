import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
export class OutputStreamWrapper extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: OutputStream)
    // private out: OutputStream;
    close(): void;
    flush(): void;
    getDelegate(): OutputStream;
    setDelegate(out: OutputStream): void;
    write(b: number[]): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}