import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class BrokenReader extends Reader {
    static INSTANCE: BrokenReader;
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor()
    constructor(arg0: IOException)
    constructor(arg0: () => Throwable)
    constructor(arg0: Throwable)
    // private exceptionSupplier: () => Throwable;
    close(): void;
    mark(arg0: number): void;
    read(arg0: string[], arg1: number, arg2: number): number;
    ready(): boolean;
    reset(): void;
    // private rethrow(): RuntimeException;
    skip(arg0: number): number;
}