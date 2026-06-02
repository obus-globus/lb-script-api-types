import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { UnsynchronizedFilterInputStream$Builder } from '../../../../../org/apache/commons/io/input/UnsynchronizedFilterInputStream$Builder.d.ts'
export class UnsynchronizedFilterInputStream extends InputStream {
    static builder(): UnsynchronizedFilterInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: UnsynchronizedFilterInputStream$Builder)
    // private inputStream: InputStream;
    available(): number;
    close(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}