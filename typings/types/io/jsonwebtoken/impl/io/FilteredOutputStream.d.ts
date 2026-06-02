import type { FilterOutputStream } from '../../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class FilteredOutputStream extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    afterWrite(arg0: number): void;
    beforeWrite(arg0: number): void;
    close(): void;
    flush(): void;
    onThrowable(arg0: Throwable): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}