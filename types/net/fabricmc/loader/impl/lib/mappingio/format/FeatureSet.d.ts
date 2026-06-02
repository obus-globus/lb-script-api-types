import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet$ClassSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$ClassSupport.d.ts'
import type { FeatureSet$ElementCommentSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$ElementCommentSupport.d.ts'
import type { FeatureSet$LocalSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$LocalSupport.d.ts'
import type { FeatureSet$MemberSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$MemberSupport.d.ts'
import type { FeatureSet$MetadataSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$MetadataSupport.d.ts'
import type { FeatureSet$NameSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$NameSupport.d.ts'
export interface FeatureSet extends Object{
    args(): FeatureSet$LocalSupport;
    classes(): FeatureSet$ClassSupport;
    elementComments(): FeatureSet$ElementCommentSupport;
    elementMetadata(): FeatureSet$MetadataSupport;
    fields(): FeatureSet$MemberSupport;
    fileMetadata(): FeatureSet$MetadataSupport;
    hasFileComments(): boolean;
    hasNamespaces(): boolean;
    methods(): FeatureSet$MemberSupport;
    packages(): FeatureSet$NameSupport;
    supportsArgs(): boolean;
    supportsVars(): boolean;
    vars(): FeatureSet$LocalSupport;
}