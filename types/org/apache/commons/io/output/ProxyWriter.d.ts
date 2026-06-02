import type { FilterWriter } from '../../../../../java/io/FilterWriter.d.ts'
import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class ProxyWriter extends FilterWriter {
    static nullWriter(): Writer;
    constructor(arg0: Writer)
    afterWrite(arg0: number): void;
    append(arg0: string): Writer;
    append(arg0: CharSequence): Writer;
    append(arg0: CharSequence, arg1: number, arg2: number): Writer;
    beforeWrite(arg0: number): void;
    close(): void;
    flush(): void;
    handleIOException(arg0: IOException): void;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}