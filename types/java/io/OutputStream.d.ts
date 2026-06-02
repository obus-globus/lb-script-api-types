import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { Flushable } from '../../java/io/Flushable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class OutputStream extends Object implements Closeable, Flushable {
    static nullOutputStream(): OutputStream;
    constructor()
    close(): void;
    flush(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}