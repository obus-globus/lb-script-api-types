import type { FeatureSet$DescSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$DescSupport.d.ts'
import type { FeatureSet$FeaturePresence } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$FeaturePresence.d.ts'
import type { FeatureSet$MemberSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$MemberSupport.d.ts'
import type { FeatureSet$NameSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$NameSupport.d.ts'
import type { FeatureSetImpl$NameSupportImpl } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSetImpl$NameSupportImpl.d.ts'
export class FeatureSetImpl$MemberSupportImpl extends FeatureSetImpl$NameSupportImpl implements FeatureSet$MemberSupport {
    constructor(arg0: FeatureSet$NameSupport, arg1: FeatureSet$DescSupport)
    // private descriptors: FeatureSet$DescSupport;
    dstDescs(): FeatureSet$FeaturePresence;
    srcDescs(): FeatureSet$FeaturePresence;
}