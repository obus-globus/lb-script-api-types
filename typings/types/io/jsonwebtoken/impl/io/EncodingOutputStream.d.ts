import type { FilteredOutputStream } from '../../../../io/jsonwebtoken/impl/io/FilteredOutputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class EncodingOutputStream extends FilteredOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream, arg1: string, arg2: string)
    // private codecName: string;
    // private name: string;
    onThrowable(arg0: Throwable): void;
}