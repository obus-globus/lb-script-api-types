import type { FeatureSet$DescSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$DescSupport.d.ts'
import type { FeatureSet$FeaturePresence } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$FeaturePresence.d.ts'
import type { FeatureSet$LocalSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$LocalSupport.d.ts'
import type { FeatureSet$NameSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$NameSupport.d.ts'
import type { FeatureSetImpl$NameSupportImpl } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSetImpl$NameSupportImpl.d.ts'
export class FeatureSetImpl$LocalSupportImpl extends FeatureSetImpl$NameSupportImpl implements FeatureSet$LocalSupport {
    constructor(arg0: FeatureSet$FeaturePresence, arg1: FeatureSet$FeaturePresence, arg2: FeatureSet$FeaturePresence, arg3: FeatureSet$FeaturePresence, arg4: FeatureSet$FeaturePresence, arg5: FeatureSet$NameSupport, arg6: FeatureSet$DescSupport)
    // private descriptors: FeatureSet$DescSupport;
    // private endOpIndices: FeatureSet$FeaturePresence;
    // private lvIndices: FeatureSet$FeaturePresence;
    // private lvtRowIndices: FeatureSet$FeaturePresence;
    // private positions: FeatureSet$FeaturePresence;
    // private startOpIndices: FeatureSet$FeaturePresence;
    dstDescs(): FeatureSet$FeaturePresence;
    endOpIndices(): FeatureSet$FeaturePresence;
    lvIndices(): FeatureSet$FeaturePresence;
    lvtRowIndices(): FeatureSet$FeaturePresence;
    positions(): FeatureSet$FeaturePresence;
    srcDescs(): FeatureSet$FeaturePresence;
    startOpIndices(): FeatureSet$FeaturePresence;
}