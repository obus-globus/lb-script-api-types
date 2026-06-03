import type { Reader } from '../java/io/Reader.d.ts'
import type { CharBuffer } from '../java/nio/CharBuffer.d.ts'
import type { Charset } from '../java/nio/charset/Charset.d.ts'
import type { CharSequence } from '../java/lang/CharSequence.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
export class ResponseBody$BomAwareReader extends Reader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(source: BufferedSource, charset: Charset)
    // private charset: Charset;
    // private closed: boolean;
    // private delegate: Reader | null;
    // private source: BufferedSource;
    close(): void;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(cbuf: string[], off: number, len: number): number;
}