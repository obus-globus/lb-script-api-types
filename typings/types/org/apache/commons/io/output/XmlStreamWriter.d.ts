import type { File } from '../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { StringWriter } from '../../../../../java/io/StringWriter.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { XmlStreamWriter$Builder } from '../../../../../org/apache/commons/io/output/XmlStreamWriter$Builder.d.ts'
export class XmlStreamWriter extends Writer {
    static builder(): XmlStreamWriter$Builder;
    static nullWriter(): Writer;
    constructor(arg0: File)
    constructor(arg0: File, arg1: string)
    constructor(arg0: OutputStream)
    private constructor(arg0: OutputStream, arg1: Charset)
    constructor(arg0: OutputStream, arg1: string)
    private constructor(arg0: XmlStreamWriter$Builder)
    // private charset: Charset;
    // private defaultCharset: Charset;
    // private out: OutputStream;
    // private prologWriter: StringWriter;
    // private writer: Writer;
    close(): void;
    // private detectEncoding(arg0: string[], arg1: number, arg2: number): void;
    flush(): void;
    getDefaultEncoding(): string;
    getEncoding(): string;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}