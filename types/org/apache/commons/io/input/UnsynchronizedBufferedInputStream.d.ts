import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { UnsynchronizedBufferedInputStream$Builder } from '../../../../../org/apache/commons/io/input/UnsynchronizedBufferedInputStream$Builder.d.ts'
import type { UnsynchronizedFilterInputStream } from '../../../../../org/apache/commons/io/input/UnsynchronizedFilterInputStream.d.ts'
import type { UnsynchronizedFilterInputStream$Builder } from '../../../../../org/apache/commons/io/input/UnsynchronizedFilterInputStream$Builder.d.ts'
export class UnsynchronizedBufferedInputStream extends UnsynchronizedFilterInputStream {
    static builder(): UnsynchronizedFilterInputStream$Builder;
    static nullInputStream(): InputStream;
    private constructor(arg0: UnsynchronizedBufferedInputStream$Builder)
    // private buffer: number[];
    // private count: number;
    // private markLimit: number;
    // private markPos: number;
    // private pos: number;
    available(): number;
    close(): void;
    // private fillBuffer(arg0: InputStream, arg1: number[]): number;
    getBuffer(): number[];
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}