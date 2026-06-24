import type { UncheckedFilterOutputStream$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { FilterOutputStream } from '../../../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { UncheckedFilterOutputStream$Builder } from '../../../../../org/apache/commons/io/output/UncheckedFilterOutputStream$Builder.d.ts'
export class UncheckedFilterOutputStream extends FilterOutputStream {
    static builder(): UncheckedFilterOutputStream$Builder;
    static nullOutputStream(): OutputStream;
    private constructor(arg0: UncheckedFilterOutputStream$Builder)
    constructor(arg0: UncheckedFilterOutputStream$Builder, arg1: UncheckedFilterOutputStream$1)
    close(): void;
    flush(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}