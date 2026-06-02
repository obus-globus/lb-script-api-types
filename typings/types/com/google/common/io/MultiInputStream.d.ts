import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class MultiInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(it: Iterator<ByteSource>)
    // private in: InputStream;
    // private it: Iterator<ByteSource>;
    // private advance(): void;
    available(): number;
    close(): void;
    markSupported(): boolean;
    read(): number;
    read(b: number[], off: number, len: number): number;
    skip(n: number): number;
}