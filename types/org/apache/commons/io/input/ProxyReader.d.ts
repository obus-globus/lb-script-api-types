import type { FilterReader } from '../../../../../java/io/FilterReader.d.ts'
import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export abstract class ProxyReader extends FilterReader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: Reader)
    afterRead(arg0: number): void;
    beforeRead(arg0: number): void;
    close(): void;
    handleIOException(arg0: IOException): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    ready(): boolean;
    reset(): void;
    skip(arg0: number): number;
}