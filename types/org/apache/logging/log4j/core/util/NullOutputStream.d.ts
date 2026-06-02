import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
export class NullOutputStream extends OutputStream {
    static NULL_OUTPUT_STREAM: NullOutputStream;
    static getInstance(): NullOutputStream;
    static nullOutputStream(): OutputStream;
    private constructor()
    write(b: number[]): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}