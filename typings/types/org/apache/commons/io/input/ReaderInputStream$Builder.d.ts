import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetEncoder } from '../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { ReaderInputStream } from '../../../../../org/apache/commons/io/input/ReaderInputStream.d.ts'
export class ReaderInputStream$Builder extends AbstractStreamBuilder<ReaderInputStream, ReaderInputStream$Builder> {
    constructor()
    // private charsetEncoder: CharsetEncoder;
    get(): ReaderInputStream;
    getCharsetEncoder(): CharsetEncoder;
    setCharset(arg0: Charset): ReaderInputStream$Builder;
    setCharset(arg0: string): ReaderInputStream$Builder;
    setCharsetEncoder(arg0: CharsetEncoder): ReaderInputStream$Builder;
}