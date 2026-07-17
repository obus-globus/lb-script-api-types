import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { UnsynchronizedByteArrayInputStream$Builder } from '../../../../../org/apache/commons/io/input/UnsynchronizedByteArrayInputStream$Builder.d.ts'
export class UnsynchronizedByteArrayInputStream extends InputStream {
    static END_OF_STREAM: number;
    static builder(): UnsynchronizedByteArrayInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number[], arg1: number, arg2: number)
    // private data: number[];
    // private eod: number;
    // private markedOffset: number;
    // private offset: number;
    available(): number;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}