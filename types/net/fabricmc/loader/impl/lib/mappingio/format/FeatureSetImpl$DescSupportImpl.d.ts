import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet$DescSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$DescSupport.d.ts'
import type { FeatureSet$FeaturePresence } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$FeaturePresence.d.ts'
export class FeatureSetImpl$DescSupportImpl extends Object implements FeatureSet$DescSupport {
    constructor(arg0: FeatureSet$FeaturePresence, arg1: FeatureSet$FeaturePresence)
    // private dstDescriptors: FeatureSet$FeaturePresence;
    // private srcDescriptors: FeatureSet$FeaturePresence;
    dstDescs(): FeatureSet$FeaturePresence;
    srcDescs(): FeatureSet$FeaturePresence;
}