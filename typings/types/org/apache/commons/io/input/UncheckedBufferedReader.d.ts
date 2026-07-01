import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { UncheckedBufferedReader$Builder } from '../../../../../org/apache/commons/io/input/UncheckedBufferedReader$Builder.d.ts'
export class UncheckedBufferedReader extends BufferedReader {
    static builder(): UncheckedBufferedReader$Builder;
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: UncheckedBufferedReader$Builder, arg1: any)
    close(): void;
    mark(arg0: number): void;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    readLine(): string;
    ready(): boolean;
    reset(): void;
    skip(arg0: number): number;
}