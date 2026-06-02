import type { PrimitiveSink } from '../../../../com/google/common/hash/PrimitiveSink.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class Funnels$SinkAsStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(sink: PrimitiveSink)
    // private sink: PrimitiveSink;
    toString(): string;
    write(bytes: number[]): void;
    write(bytes: number[], off: number, len: number): void;
    write(b: number): void;
}