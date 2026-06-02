import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { MediaTypeRegistry } from '../../../../org/apache/tika/mime/MediaTypeRegistry.d.ts'
export class CompositeDetector extends Object implements Detector {
    constructor(arg0: Detector[])
    constructor(arg0: Detector[])
    constructor(arg0: MediaTypeRegistry, arg1: Detector[])
    constructor(arg0: MediaTypeRegistry, arg1: Detector[], arg2: E[])
    readonly detectors: Detector[];
    // private registry: MediaTypeRegistry;
    // private assignableFrom(arg0: E[], arg1: Class<Detector>): boolean;
    detect(arg0: InputStream, arg1: Metadata): MediaType;
    getDetectors(): Detector[];
    // private isExcluded(arg0: E[], arg1: Class<Detector>): boolean;
}