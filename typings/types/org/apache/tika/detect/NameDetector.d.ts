import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
export class NameDetector extends Object implements Detector {
    constructor(arg0: Map<Pattern, MediaType>)
    // private patterns: Map<Pattern, MediaType>;
    detect(arg0: InputStream, arg1: Metadata): MediaType;
}