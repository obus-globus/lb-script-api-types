import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class NonClosingOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(delegate: OutputStream)
    // private delegate: OutputStream;
    close(): void;
    flush(): void;
    write(b: number[]): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}