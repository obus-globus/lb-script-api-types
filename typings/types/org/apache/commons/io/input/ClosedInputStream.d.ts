import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
export class ClosedInputStream extends InputStream {
    static CLOSED_INPUT_STREAM: ClosedInputStream;
    static INSTANCE: ClosedInputStream;
    static nullInputStream(): InputStream;
    constructor()
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}