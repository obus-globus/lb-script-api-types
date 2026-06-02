import type { Streams$AppendableWriter$CurrentWrite } from '../../../../../../com/viaversion/viaversion/libs/gson/internal/Streams$AppendableWriter$CurrentWrite.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../../../java/lang/Appendable.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
export class Streams$AppendableWriter extends Writer {
    static nullWriter(): Writer;
    constructor(arg0: Appendable)
    // private appendable: Appendable;
    // private currentWrite: Streams$AppendableWriter$CurrentWrite;
    append(arg0: CharSequence): Writer;
    append(arg0: CharSequence, arg1: number, arg2: number): Writer;
    close(): void;
    flush(): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string, arg1: number, arg2: number): void;
}