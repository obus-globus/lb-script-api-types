import type { Writer } from '../../../../../java/io/Writer.d.ts'
export class StrBuilder$StrBuilderWriter extends Writer {
    static nullWriter(): Writer;
    constructor(null_: StrBuilder$StrBuilderWriter)
    close(): void;
    flush(): void;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}