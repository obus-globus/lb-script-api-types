import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet$ClassSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$ClassSupport.d.ts'
import type { FeatureSet$FeaturePresence } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$FeaturePresence.d.ts'
import type { FeatureSetBuilder$NameFeatureBuilder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSetBuilder$NameFeatureBuilder.d.ts'
export class FeatureSetBuilder$ClassSupportBuilder extends Object {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: FeatureSet$ClassSupport)
    private constructor(arg0: FeatureSetBuilder$NameFeatureBuilder, arg1: boolean)
    // private hasRepackaging: boolean;
    // private names: FeatureSetBuilder$NameFeatureBuilder;
    build(): FeatureSet$ClassSupport;
    withDstNames(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$ClassSupportBuilder;
    withRepackaging(arg0: boolean): FeatureSetBuilder$ClassSupportBuilder;
    withSrcNames(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$ClassSupportBuilder;
}