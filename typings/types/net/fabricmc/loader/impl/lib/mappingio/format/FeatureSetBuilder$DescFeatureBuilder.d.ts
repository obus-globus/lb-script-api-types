import type { FeatureSetBuilder$1 } from '../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet$DescSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$DescSupport.d.ts'
import type { FeatureSet$FeaturePresence } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$FeaturePresence.d.ts'
export class FeatureSetBuilder$DescFeatureBuilder extends Object {
    constructor()
    constructor(arg0: boolean)
    private constructor(arg0: FeatureSet$DescSupport)
    constructor(arg0: FeatureSet$DescSupport, arg1: FeatureSetBuilder$1)
    private constructor(arg0: FeatureSet$FeaturePresence, arg1: FeatureSet$FeaturePresence)
    // private dstDescriptors: FeatureSet$FeaturePresence;
    // private srcDescriptors: FeatureSet$FeaturePresence;
    build(): FeatureSet$DescSupport;
    withDstDescs(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$DescFeatureBuilder;
    withSrcDescs(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$DescFeatureBuilder;
}