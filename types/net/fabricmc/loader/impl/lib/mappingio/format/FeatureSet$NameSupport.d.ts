import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet$FeaturePresence } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$FeaturePresence.d.ts'
export interface FeatureSet$NameSupport extends Object{
    dstNames(): FeatureSet$FeaturePresence;
    srcNames(): FeatureSet$FeaturePresence;
}