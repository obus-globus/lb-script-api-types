import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
export class FilterCollectionWriter extends Writer {
    static nullWriter(): Writer;
    constructor(arg0: Writer[])
    constructor(arg0: E[])
    // private EMPTY_WRITERS: E[];
    // private writers: E[];
    append(arg0: string): Writer;
    append(arg0: CharSequence): Writer;
    append(arg0: CharSequence, arg1: number, arg2: number): Writer;
    close(): void;
    flush(): void;
    // private forAllWriters(arg0: (param0: Writer) => void): FilterCollectionWriter;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
    // private writers(): Stream<Writer>;
}