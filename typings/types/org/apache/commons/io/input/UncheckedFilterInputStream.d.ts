import type { UncheckedFilterInputStream$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { FilterInputStream } from '../../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { UncheckedFilterInputStream$Builder } from '../../../../../org/apache/commons/io/input/UncheckedFilterInputStream$Builder.d.ts'
export class UncheckedFilterInputStream extends FilterInputStream {
    static builder(): UncheckedFilterInputStream$Builder;
    static nullInputStream(): InputStream;
    private constructor(arg0: UncheckedFilterInputStream$Builder)
    constructor(arg0: UncheckedFilterInputStream$Builder, arg1: UncheckedFilterInputStream$1)
    available(): number;
    close(): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}