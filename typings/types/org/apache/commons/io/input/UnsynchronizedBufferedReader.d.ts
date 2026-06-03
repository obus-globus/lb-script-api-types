import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { UnsynchronizedReader } from '../../../../../org/apache/commons/io/input/UnsynchronizedReader.d.ts'
export class UnsynchronizedBufferedReader extends UnsynchronizedReader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: Reader)
    constructor(arg0: Reader, arg1: number)
    // private buf: string[];
    // private end: number;
    // private in: Reader;
    // private mark: number;
    // private markLimit: number;
    // private pos: number;
    chompNewline(): void;
    close(): void;
    // private fillBuf(): number;
    mark(arg0: number): void;
    markSupported(): boolean;
    peek(): number;
    peek(arg0: string[]): number;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    readLine(): string;
    ready(): boolean;
    reset(): void;
    skip(arg0: number): number;
}