import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../../../java/nio/charset/CharsetDecoder.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { WriterOutputStream } from '../../../../../org/apache/commons/io/output/WriterOutputStream.d.ts'
export class WriterOutputStream$Builder extends AbstractStreamBuilder<WriterOutputStream, WriterOutputStream$Builder> {
    constructor()
    // private charsetDecoder: CharsetDecoder;
    // private writeImmediately: boolean;
    get(): WriterOutputStream;
    setCharset(arg0: Charset): WriterOutputStream$Builder;
    setCharset(arg0: string): WriterOutputStream$Builder;
    setCharsetDecoder(arg0: CharsetDecoder): WriterOutputStream$Builder;
    setWriteImmediately(arg0: boolean): WriterOutputStream$Builder;
}