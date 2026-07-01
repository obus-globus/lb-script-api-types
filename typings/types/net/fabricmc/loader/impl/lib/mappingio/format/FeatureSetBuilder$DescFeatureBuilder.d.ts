import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet$DescSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$DescSupport.d.ts'
import type { FeatureSet$FeaturePresence } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$FeaturePresence.d.ts'
export class FeatureSetBuilder$DescFeatureBuilder extends Object {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: FeatureSet$DescSupport, arg1: any)
    // private dstDescriptors: FeatureSet$FeaturePresence;
    // private srcDescriptors: FeatureSet$FeaturePresence;
    build(): FeatureSet$DescSupport;
    withDstDescs(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$DescFeatureBuilder;
    withSrcDescs(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$DescFeatureBuilder;
}