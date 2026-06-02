import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSet } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet.d.ts'
import type { FeatureSet$ElementCommentSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$ElementCommentSupport.d.ts'
import type { FeatureSet$MetadataSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$MetadataSupport.d.ts'
import type { FeatureSetBuilder$ClassSupportBuilder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSetBuilder$ClassSupportBuilder.d.ts'
import type { FeatureSetBuilder$LocalSupportBuilder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSetBuilder$LocalSupportBuilder.d.ts'
import type { FeatureSetBuilder$MemberSupportBuilder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSetBuilder$MemberSupportBuilder.d.ts'
import type { FeatureSetBuilder$NameFeatureBuilder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSetBuilder$NameFeatureBuilder.d.ts'
export class FeatureSetBuilder extends Object {
    static create(): FeatureSetBuilder;
    static createFrom(paramarg0: FeatureSet): FeatureSetBuilder;
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: FeatureSet$MetadataSupport, arg2: FeatureSet$MetadataSupport, arg3: FeatureSetBuilder$NameFeatureBuilder, arg4: FeatureSetBuilder$ClassSupportBuilder, arg5: FeatureSetBuilder$MemberSupportBuilder, arg6: FeatureSetBuilder$MemberSupportBuilder, arg7: FeatureSetBuilder$LocalSupportBuilder, arg8: FeatureSetBuilder$LocalSupportBuilder, arg9: FeatureSet$ElementCommentSupport, arg10: boolean)
    // private args: FeatureSetBuilder$LocalSupportBuilder;
    // private classes: FeatureSetBuilder$ClassSupportBuilder;
    // private elementComments: FeatureSet$ElementCommentSupport;
    // private elementMetadata: FeatureSet$MetadataSupport;
    // private fields: FeatureSetBuilder$MemberSupportBuilder;
    // private fileMetadata: FeatureSet$MetadataSupport;
    // private hasFileComments: boolean;
    // private hasNamespaces: boolean;
    // private methods: FeatureSetBuilder$MemberSupportBuilder;
    // private packages: FeatureSetBuilder$NameFeatureBuilder;
    // private vars: FeatureSetBuilder$LocalSupportBuilder;
    build(): FeatureSet;
    withArgs(arg0: (param0: FeatureSetBuilder$LocalSupportBuilder) => void): FeatureSetBuilder;
    withClasses(arg0: (param0: FeatureSetBuilder$ClassSupportBuilder) => void): FeatureSetBuilder;
    withElementComments(arg0: FeatureSet$ElementCommentSupport): FeatureSetBuilder;
    withElementMetadata(arg0: FeatureSet$MetadataSupport): FeatureSetBuilder;
    withFields(arg0: (param0: FeatureSetBuilder$MemberSupportBuilder) => void): FeatureSetBuilder;
    withFileComments(arg0: boolean): FeatureSetBuilder;
    withFileMetadata(arg0: FeatureSet$MetadataSupport): FeatureSetBuilder;
    withMethods(arg0: (param0: FeatureSetBuilder$MemberSupportBuilder) => void): FeatureSetBuilder;
    withNamespaces(arg0: boolean): FeatureSetBuilder;
    withPackages(arg0: (param0: FeatureSetBuilder$NameFeatureBuilder) => void): FeatureSetBuilder;
    withVars(arg0: (param0: FeatureSetBuilder$LocalSupportBuilder) => void): FeatureSetBuilder;
}