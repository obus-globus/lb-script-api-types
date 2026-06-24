import type { UncheckedFilterWriter$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { FilterWriter } from '../../../../../java/io/FilterWriter.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { UncheckedFilterWriter$Builder } from '../../../../../org/apache/commons/io/output/UncheckedFilterWriter$Builder.d.ts'
export class UncheckedFilterWriter extends FilterWriter {
    static builder(): UncheckedFilterWriter$Builder;
    static nullWriter(): Writer;
    private constructor(arg0: UncheckedFilterWriter$Builder)
    constructor(arg0: UncheckedFilterWriter$Builder, arg1: UncheckedFilterWriter$1)
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