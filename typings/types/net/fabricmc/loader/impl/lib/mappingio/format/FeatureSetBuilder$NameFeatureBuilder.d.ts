import type { FeatureSetBuilder$1 } from '../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet$FeaturePresence } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$FeaturePresence.d.ts'
import type { FeatureSet$NameSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$NameSupport.d.ts'
export class FeatureSetBuilder$NameFeatureBuilder extends Object {
    constructor()
    constructor(arg0: boolean)
    private constructor(arg0: FeatureSet$FeaturePresence, arg1: FeatureSet$FeaturePresence)
    private constructor(arg0: FeatureSet$NameSupport)
    constructor(arg0: FeatureSet$NameSupport, arg1: FeatureSetBuilder$1)
    // private dstNames: FeatureSet$FeaturePresence;
    // private srcNames: FeatureSet$FeaturePresence;
    build(): FeatureSet$NameSupport;
    withDstNames(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$NameFeatureBuilder;
    withSrcNames(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$NameFeatureBuilder;
}