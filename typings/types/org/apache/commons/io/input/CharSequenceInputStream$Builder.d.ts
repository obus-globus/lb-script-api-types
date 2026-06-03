import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetEncoder } from '../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { CharSequenceInputStream } from '../../../../../org/apache/commons/io/input/CharSequenceInputStream.d.ts'
export class CharSequenceInputStream$Builder extends AbstractStreamBuilder<CharSequenceInputStream, CharSequenceInputStream$Builder> {
    constructor()
    // private charsetEncoder: CharsetEncoder;
    get(): CharSequenceInputStream;
    getCharsetEncoder(): CharsetEncoder;
    setCharset(arg0: Charset): CharSequenceInputStream$Builder;
    setCharset(arg0: string): CharSequenceInputStream$Builder;
    setCharsetEncoder(arg0: CharsetEncoder): CharSequenceInputStream$Builder;
}