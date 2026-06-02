import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet.d.ts'
import type { FeatureSet$ClassSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$ClassSupport.d.ts'
import type { FeatureSet$ElementCommentSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$ElementCommentSupport.d.ts'
import type { FeatureSet$LocalSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$LocalSupport.d.ts'
import type { FeatureSet$MemberSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$MemberSupport.d.ts'
import type { FeatureSet$MetadataSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$MetadataSupport.d.ts'
import type { FeatureSet$NameSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$NameSupport.d.ts'
export class FeatureSetImpl extends Object implements FeatureSet {
    constructor(arg0: boolean, arg1: FeatureSet$MetadataSupport, arg2: FeatureSet$MetadataSupport, arg3: FeatureSet$NameSupport, arg4: FeatureSet$ClassSupport, arg5: FeatureSet$MemberSupport, arg6: FeatureSet$MemberSupport, arg7: FeatureSet$LocalSupport, arg8: FeatureSet$LocalSupport, arg9: FeatureSet$ElementCommentSupport, arg10: boolean)
    // private args: FeatureSet$LocalSupport;
    // private classes: FeatureSet$ClassSupport;
    // private elementComments: FeatureSet$ElementCommentSupport;
    // private elementMetadata: FeatureSet$MetadataSupport;
    // private fields: FeatureSet$MemberSupport;
    // private fileMetadata: FeatureSet$MetadataSupport;
    // private hasFileComments: boolean;
    // private hasNamespaces: boolean;
    // private methods: FeatureSet$MemberSupport;
    // private packages: FeatureSet$NameSupport;
    // private vars: FeatureSet$LocalSupport;
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