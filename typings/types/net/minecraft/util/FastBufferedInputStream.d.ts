import type { InputStream } from '../../../java/io/InputStream.d.ts'
export class FastBufferedInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(in_: InputStream)
    constructor(in_: InputStream, bufferSize: number)
    // private buffer: number[];
    // private in: InputStream;
    // private limit: number;
    // private position: number;
    available(): number;
    // private bytesInBuffer(): number;
    close(): void;
    // private fill(): void;
    read(): number;
    read(output: number[], offset: number, length: number): number;
    skip(count: number): number;
}