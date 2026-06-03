import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
export class ByteArrayOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor()
    constructor(arg0: number)
    // private buf: number[];
    // private count: number;
    close(): void;
    // private ensureCapacity(arg0: number): void;
    reset(): void;
    size(): number;
    toByteArray(): number[];
    toString(): string;
    toString(arg0: Charset): string;
    toString(arg0: number): string;
    toString(arg0: string): string;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    writeBytes(arg0: number[]): void;
    writeTo(arg0: OutputStream): void;
}