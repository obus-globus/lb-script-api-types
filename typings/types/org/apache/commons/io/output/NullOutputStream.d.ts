import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
export class NullOutputStream extends OutputStream {
    static INSTANCE: NullOutputStream;
    static NULL_OUTPUT_STREAM: NullOutputStream;
    static nullOutputStream(): OutputStream;
    constructor()
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}