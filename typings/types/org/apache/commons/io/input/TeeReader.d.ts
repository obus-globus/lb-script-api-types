import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { ProxyReader } from '../../../../../org/apache/commons/io/input/ProxyReader.d.ts'
export class TeeReader extends ProxyReader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: Reader, arg1: Writer)
    constructor(arg0: Reader, arg1: Writer, arg2: boolean)
    // private branch: Writer;
    // private closeBranch: boolean;
    close(): void;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
}