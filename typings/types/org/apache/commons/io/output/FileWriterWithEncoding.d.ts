import type { File } from '../../../../../java/io/File.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetEncoder } from '../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { FileWriterWithEncoding$Builder } from '../../../../../org/apache/commons/io/output/FileWriterWithEncoding$Builder.d.ts'
import type { ProxyWriter } from '../../../../../org/apache/commons/io/output/ProxyWriter.d.ts'
export class FileWriterWithEncoding extends ProxyWriter {
    static builder(): FileWriterWithEncoding$Builder;
    static nullWriter(): Writer;
    constructor(arg0: File, arg1: Charset)
    constructor(arg0: File, arg1: Charset, arg2: boolean)
    constructor(arg0: File, arg1: CharsetEncoder)
    constructor(arg0: File, arg1: CharsetEncoder, arg2: boolean)
    constructor(arg0: File, arg1: string)
    constructor(arg0: File, arg1: string, arg2: boolean)
    constructor(arg0: string, arg1: Charset)
    constructor(arg0: string, arg1: Charset, arg2: boolean)
    constructor(arg0: string, arg1: CharsetEncoder)
    constructor(arg0: string, arg1: CharsetEncoder, arg2: boolean)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: boolean)
}