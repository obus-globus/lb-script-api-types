import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class BrokenOutputStream extends OutputStream {
    static INSTANCE: BrokenOutputStream;
    static nullOutputStream(): OutputStream;
    constructor()
    constructor(arg0: IOException)
    constructor(arg0: (param0: string) => Throwable)
    constructor(arg0: () => Throwable)
    constructor(arg0: Throwable)
    // private exceptionFunction: (param0: string) => Throwable;
    close(): void;
    flush(): void;
    // private rethrow(arg0: string): RuntimeException;
    write(arg0: number): void;
}