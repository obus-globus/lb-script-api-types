import type { FilteredInputStream } from '../../../../io/jsonwebtoken/impl/io/FilteredInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class DecodingInputStream extends FilteredInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: string, arg2: string)
    // private codecName: string;
    // private name: string;
    onThrowable(arg0: Throwable): void;
}