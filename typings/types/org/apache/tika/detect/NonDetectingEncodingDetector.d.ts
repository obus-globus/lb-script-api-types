import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EncodingDetector } from '../../../../org/apache/tika/detect/EncodingDetector.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
export class NonDetectingEncodingDetector extends Object implements EncodingDetector {
    constructor()
    constructor(arg0: Charset)
    readonly charset: Charset;
    detect(arg0: InputStream, arg1: Metadata): Charset;
    getCharset(): Charset;
    // private setCharset(arg0: string): void;
}