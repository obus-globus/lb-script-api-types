import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { InputStreamReader } from '../../../../../../java/io/InputStreamReader.d.ts'
import type { PushbackInputStream } from '../../../../../../java/io/PushbackInputStream.d.ts'
import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../../../../java/nio/CharBuffer.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
export class UnicodeReader extends Reader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: InputStream)
    // private internalIn: PushbackInputStream;
    // private internalIn2: InputStreamReader;
    close(): void;
    getEncoding(): string;
    init(): void;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
}