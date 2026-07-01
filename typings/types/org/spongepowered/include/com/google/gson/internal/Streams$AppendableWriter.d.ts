import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Streams$AppendableWriter$CurrentWrite } from '../../../../../../../org/spongepowered/include/com/google/gson/internal/Streams$AppendableWriter$CurrentWrite.d.ts'
export class Streams$AppendableWriter extends Writer {
    static nullWriter(): Writer;
    constructor(arg0: Appendable, arg1: any)
    // private appendable: Appendable;
    // private currentWrite: Streams$AppendableWriter$CurrentWrite;
    close(): void;
    flush(): void;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}