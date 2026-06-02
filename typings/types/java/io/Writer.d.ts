import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { Flushable } from '../../java/io/Flushable.d.ts'
import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export abstract class Writer extends Object implements Closeable, Flushable, Appendable {
    static nullWriter(): Writer;
    constructor()
    constructor(arg0: Object)
    // private lock: Object;
    // private writeBuffer: string[];
    append(arg0: string): Writer;
    append(arg0: CharSequence): Writer;
    append(arg0: CharSequence, arg1: number, arg2: number): Writer;
    close(): void;
    flush(): void;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}