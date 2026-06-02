import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EncodingDetector } from '../../../../org/apache/tika/detect/EncodingDetector.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
export class CompositeEncodingDetector extends Object implements Serializable, EncodingDetector {
    constructor(arg0: EncodingDetector[])
    constructor(arg0: EncodingDetector[], arg1: E[])
    readonly detectors: EncodingDetector[];
    // private assignableFrom(arg0: E[], arg1: Class<EncodingDetector>): boolean;
    detect(arg0: InputStream, arg1: Metadata): Charset;
    getDetectors(): EncodingDetector[];
    // private isExcluded(arg0: E[], arg1: Class<EncodingDetector>): boolean;
}