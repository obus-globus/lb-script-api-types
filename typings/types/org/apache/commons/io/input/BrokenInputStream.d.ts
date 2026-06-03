import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class BrokenInputStream extends InputStream {
    static INSTANCE: BrokenInputStream;
    static nullInputStream(): InputStream;
    constructor()
    constructor(arg0: IOException)
    constructor(arg0: () => Throwable)
    constructor(arg0: Throwable)
    // private exceptionSupplier: () => Throwable;
    available(): number;
    close(): void;
    getThrowable(): Throwable;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    // private rethrow(): RuntimeException;
    skip(arg0: number): number;
}