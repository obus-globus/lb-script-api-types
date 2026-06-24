import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { StrBuilder } from '../../../../../org/apache/commons/lang3/text/StrBuilder.d.ts'
export class StrBuilder$StrBuilderWriter extends Writer {
    static nullWriter(): Writer;
    constructor(null_: StrBuilder)
    close(): void;
    flush(): void;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}