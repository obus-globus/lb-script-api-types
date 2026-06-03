import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class BrokenWriter extends Writer {
    static INSTANCE: BrokenWriter;
    static nullWriter(): Writer;
    constructor()
    constructor(arg0: IOException)
    constructor(arg0: () => Throwable)
    constructor(arg0: Throwable)
    // private exceptionSupplier: () => Throwable;
    close(): void;
    flush(): void;
    // private rethrow(): RuntimeException;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}