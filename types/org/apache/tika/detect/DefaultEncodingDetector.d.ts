import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { CompositeEncodingDetector } from '../../../../org/apache/tika/detect/CompositeEncodingDetector.d.ts'
export class DefaultEncodingDetector extends CompositeEncodingDetector {
    constructor()
    constructor(arg0: ServiceLoader)
    constructor(arg0: ServiceLoader, arg1: E[])
}