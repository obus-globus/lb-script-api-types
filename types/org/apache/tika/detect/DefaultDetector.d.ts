import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { CompositeDetector } from '../../../../org/apache/tika/detect/CompositeDetector.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { MimeTypes } from '../../../../org/apache/tika/mime/MimeTypes.d.ts'
export class DefaultDetector extends CompositeDetector {
    constructor()
    constructor(arg0: ClassLoader)
    constructor(arg0: MimeTypes)
    constructor(arg0: MimeTypes, arg1: ClassLoader)
    constructor(arg0: MimeTypes, arg1: ServiceLoader)
    constructor(arg0: MimeTypes, arg1: ServiceLoader, arg2: E[])
    // private loader: ServiceLoader;
    getDetectors(): Detector[];
}