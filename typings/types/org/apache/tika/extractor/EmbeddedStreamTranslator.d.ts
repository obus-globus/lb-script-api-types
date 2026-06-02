import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
export interface EmbeddedStreamTranslator extends Object{
    shouldTranslate(arg0: InputStream, arg1: Metadata): boolean;
    translate(arg0: InputStream, arg1: Metadata): InputStream;
}