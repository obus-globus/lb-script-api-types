import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
export interface EncodingDetector extends Serializable, Object{
    detect(arg0: InputStream, arg1: Metadata): Charset;
}