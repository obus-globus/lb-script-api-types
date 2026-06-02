import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { OpenOption } from '../../../../../java/nio/file/OpenOption.d.ts'
import type { AbstractOrigin } from '../../../../../org/apache/commons/io/build/AbstractOrigin.d.ts'
export class AbstractOrigin$WriterOrigin extends AbstractOrigin<Writer, AbstractOrigin$WriterOrigin> {
    constructor(arg0: Writer)
    getOutputStream(arg0: OpenOption[]): OutputStream;
    getWriter(arg0: Charset, arg1: OpenOption[]): Writer;
}