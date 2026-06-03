import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
export class ClosedOutputStream extends OutputStream {
    static CLOSED_OUTPUT_STREAM: ClosedOutputStream;
    static INSTANCE: ClosedOutputStream;
    static nullOutputStream(): OutputStream;
    constructor()
    flush(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}