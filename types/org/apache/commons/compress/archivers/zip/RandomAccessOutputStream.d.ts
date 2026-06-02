import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
export abstract class RandomAccessOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor()
    position(): number;
    write(arg0: number): void;
    writeAll(arg0: number[], arg1: number, arg2: number, arg3: number): void;
    writeAll(arg0: number[], arg1: number): void;
}