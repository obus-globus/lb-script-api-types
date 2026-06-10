import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { CompositeEncodingDetector } from '../../../../org/apache/tika/detect/CompositeEncodingDetector.d.ts'
import type { EncodingDetector } from '../../../../org/apache/tika/detect/EncodingDetector.d.ts'
export class DefaultEncodingDetector extends CompositeEncodingDetector {
    constructor()
    constructor(arg0: ServiceLoader)
    constructor(arg0: ServiceLoader, arg1: Class<EncodingDetector>[])
}