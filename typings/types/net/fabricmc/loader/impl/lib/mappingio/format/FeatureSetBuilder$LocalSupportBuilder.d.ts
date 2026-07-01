import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet$FeaturePresence } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$FeaturePresence.d.ts'
import type { FeatureSet$LocalSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$LocalSupport.d.ts'
import type { FeatureSetBuilder$DescFeatureBuilder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSetBuilder$DescFeatureBuilder.d.ts'
import type { FeatureSetBuilder$NameFeatureBuilder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSetBuilder$NameFeatureBuilder.d.ts'
export class FeatureSetBuilder$LocalSupportBuilder extends Object {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: FeatureSet$LocalSupport)
    // private descriptors: FeatureSetBuilder$DescFeatureBuilder;
    // private endOpIndices: FeatureSet$FeaturePresence;
    // private lvIndices: FeatureSet$FeaturePresence;
    // private lvtRowIndices: FeatureSet$FeaturePresence;
    // private names: FeatureSetBuilder$NameFeatureBuilder;
    // private positions: FeatureSet$FeaturePresence;
    // private startOpIndices: FeatureSet$FeaturePresence;
    build(): FeatureSet$LocalSupport;
    withDstNames(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$LocalSupportBuilder;
    withLvIndices(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$LocalSupportBuilder;
    withLvtRowIndices(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$LocalSupportBuilder;
    withPositions(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$LocalSupportBuilder;
    withSrcDescs(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$LocalSupportBuilder;
    withSrcNames(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$LocalSupportBuilder;
    withStartOpIndices(arg0: FeatureSet$FeaturePresence): FeatureSetBuilder$LocalSupportBuilder;
}