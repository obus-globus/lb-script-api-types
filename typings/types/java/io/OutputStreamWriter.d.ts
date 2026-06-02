import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Writer } from '../../java/io/Writer.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { CharsetEncoder } from '../../java/nio/charset/CharsetEncoder.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { StreamEncoder } from '../../sun/nio/cs/StreamEncoder.d.ts'
export class OutputStreamWriter extends Writer {
    static nullWriter(): Writer;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: Charset)
    constructor(arg0: OutputStream, arg1: CharsetEncoder)
    constructor(arg0: OutputStream, arg1: string)
    // private se: StreamEncoder;
    append(arg0: CharSequence): Writer;
    append(arg0: CharSequence, arg1: number, arg2: number): Writer;
    close(): void;
    flush(): void;
    flushBuffer(): void;
    getEncoding(): string;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string, arg1: number, arg2: number): void;
}