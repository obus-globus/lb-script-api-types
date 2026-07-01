import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet$FeaturePresence } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$FeaturePresence.d.ts'
import type { FeatureSet$MemberSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$MemberSupport.d.ts'
import type { FeatureSetBuilder$DescFeatureBuilder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSetBuilder$DescFeatureBuilder.d.ts'
import type { FeatureSetBuilder$NameFeatureBuilder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSetBuilder$NameFeatureBuilder.d.ts'
export class FeatureSetBuilder$MemberSupportBuilder extends Object {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: FeatureSet$MemberSupport)
    // private descriptors: FeatureSetBuilder$DescFeatureBuilder;
    // private names: FeatureSetBuilder$NameFeatureBuilder;
    build(): FeatureSet$MemberSupport;
    withDstDescs(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$MemberSupportBuilder;
    withDstNames(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$MemberSupportBuilder;
    withSrcDescs(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$MemberSupportBuilder;
    withSrcNames(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$MemberSupportBuilder;
}