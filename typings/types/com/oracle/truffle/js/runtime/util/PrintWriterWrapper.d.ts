import type { OutputStreamWrapper } from '../../../../../../com/oracle/truffle/js/runtime/util/OutputStreamWrapper.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { PrintWriter } from '../../../../../../java/io/PrintWriter.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
export class PrintWriterWrapper extends PrintWriter {
    static nullWriter(): Writer;
    private constructor(outWrapper: OutputStreamWrapper, autoFlush: boolean, charset: Charset)
    constructor(out: OutputStream, autoFlush: boolean, charset: Charset)
    // private outWrapper: OutputStreamWrapper;
    getDelegate(): OutputStream;
    setDelegate(out: OutputStream): void;
}