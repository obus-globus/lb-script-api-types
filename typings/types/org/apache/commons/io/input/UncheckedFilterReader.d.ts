import type { UncheckedFilterReader$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { FilterReader } from '../../../../../java/io/FilterReader.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { UncheckedFilterReader$Builder } from '../../../../../org/apache/commons/io/input/UncheckedFilterReader$Builder.d.ts'
export class UncheckedFilterReader extends FilterReader {
    static builder(): UncheckedFilterReader$Builder;
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    private constructor(arg0: UncheckedFilterReader$Builder)
    constructor(arg0: UncheckedFilterReader$Builder, arg1: UncheckedFilterReader$1)
    close(): void;
    mark(arg0: number): void;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    ready(): boolean;
    reset(): void;
    skip(arg0: number): number;
}