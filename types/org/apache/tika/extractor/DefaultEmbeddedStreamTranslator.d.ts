import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EmbeddedStreamTranslator } from '../../../../org/apache/tika/extractor/EmbeddedStreamTranslator.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
export class DefaultEmbeddedStreamTranslator extends Object implements EmbeddedStreamTranslator {
    constructor()
    private constructor(arg0: EmbeddedStreamTranslator[])
    // private translators: EmbeddedStreamTranslator[];
    shouldTranslate(arg0: InputStream, arg1: Metadata): boolean;
    translate(arg0: InputStream, arg1: Metadata): InputStream;
}