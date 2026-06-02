import type { FeatureSet$ClassSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$ClassSupport.d.ts'
import type { FeatureSet$NameSupport } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet$NameSupport.d.ts'
import type { FeatureSetImpl$NameSupportImpl } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSetImpl$NameSupportImpl.d.ts'
export class FeatureSetImpl$ClassSupportImpl extends FeatureSetImpl$NameSupportImpl implements FeatureSet$ClassSupport {
    constructor(arg0: FeatureSet$NameSupport, arg1: boolean)
    // private hasRepackaging: boolean;
    hasRepackaging(): boolean;
}