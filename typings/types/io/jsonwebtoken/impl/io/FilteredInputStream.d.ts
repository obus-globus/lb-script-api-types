import type { FilterInputStream } from '../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class FilteredInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    afterRead(arg0: number): void;
    available(): number;
    beforeRead(arg0: number): void;
    close(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    onThrowable(arg0: Throwable): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}