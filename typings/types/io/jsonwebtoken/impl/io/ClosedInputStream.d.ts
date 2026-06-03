import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class ClosedInputStream extends InputStream {
    static INSTANCE: ClosedInputStream;
    static nullInputStream(): InputStream;
    private constructor()
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}