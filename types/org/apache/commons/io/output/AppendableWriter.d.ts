import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class AppendableWriter<T extends Appendable> extends Writer {
    static nullWriter(): Writer;
    constructor(arg0: T)
    readonly appendable: T;
    append(arg0: string): Writer;
    append(arg0: CharSequence): Writer;
    append(arg0: CharSequence, arg1: number, arg2: number): Writer;
    close(): void;
    flush(): void;
    getAppendable(): T;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string, arg1: number, arg2: number): void;
}