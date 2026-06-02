import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
export class TextDetector extends Object implements Detector {
    constructor()
    constructor(arg0: number)
    // private bytesToTest: number;
    detect(arg0: InputStream, arg1: Metadata): MediaType;
}