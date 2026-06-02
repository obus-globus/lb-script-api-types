import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet$DescSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$DescSupport.d.ts'
import type { FeatureSet$FeaturePresence } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$FeaturePresence.d.ts'
import type { FeatureSet$NameSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$NameSupport.d.ts'
export interface FeatureSet$LocalSupport extends Object, FeatureSet$DescSupport, FeatureSet$NameSupport{
    endOpIndices(): FeatureSet$FeaturePresence;
    lvIndices(): FeatureSet$FeaturePresence;
    lvtRowIndices(): FeatureSet$FeaturePresence;
    positions(): FeatureSet$FeaturePresence;
    startOpIndices(): FeatureSet$FeaturePresence;
}