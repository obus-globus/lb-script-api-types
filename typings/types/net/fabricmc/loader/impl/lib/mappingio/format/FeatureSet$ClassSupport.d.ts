import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet$FeaturePresence } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$FeaturePresence.d.ts'
import type { FeatureSet$NameSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$NameSupport.d.ts'
export interface FeatureSet$ClassSupport extends Object, FeatureSet$NameSupport{
    dstNames(): FeatureSet$FeaturePresence;
    hasRepackaging(): boolean;
    srcNames(): FeatureSet$FeaturePresence;
}