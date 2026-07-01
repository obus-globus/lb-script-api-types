import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet$FeaturePresence } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$FeaturePresence.d.ts'
import type { FeatureSet$NameSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$NameSupport.d.ts'
export class FeatureSetBuilder$NameFeatureBuilder extends Object {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: FeatureSet$NameSupport, arg1: any)
    // private dstNames: FeatureSet$FeaturePresence;
    // private srcNames: FeatureSet$FeaturePresence;
    build(): FeatureSet$NameSupport;
    withDstNames(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$NameFeatureBuilder;
    withSrcNames(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$NameFeatureBuilder;
}