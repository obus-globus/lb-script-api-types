import type { MeasurableInputStream } from '../../../../../it/unimi/dsi/fastutil/io/MeasurableInputStream.d.ts'
import type { RepositionableStream } from '../../../../../it/unimi/dsi/fastutil/io/RepositionableStream.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
export class FastMultiByteArrayInputStream extends MeasurableInputStream implements RepositionableStream {
    static SLICE_BITS: number;
    static SLICE_MASK: number;
    static SLICE_SIZE: number;
    static nullInputStream(): InputStream;
    constructor(arg0: FastMultiByteArrayInputStream)
    constructor(arg0: MeasurableInputStream)
    constructor(arg0: InputStream, arg1: number)
    constructor(arg0: number[])
    array: number[][];
    current: number[];
    length: number;
    // private position: number;
    available(): number;
    close(): void;
    length(): number;
    mark(arg0: number): void;
    markSupported(): boolean;
    position(): number;
    position(arg0: number): void;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
    // private updateCurrent(): void;
}