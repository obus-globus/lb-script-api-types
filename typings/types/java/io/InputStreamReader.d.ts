import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Reader } from '../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../java/nio/CharBuffer.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../java/nio/charset/CharsetDecoder.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { StreamDecoder } from '../../sun/nio/cs/StreamDecoder.d.ts'
export class InputStreamReader extends Reader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: Charset)
    constructor(arg0: InputStream, arg1: CharsetDecoder)
    constructor(arg0: InputStream, arg1: string)
    // private sd: StreamDecoder;
    close(): void;
    getEncoding(): string;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    ready(): boolean;
}