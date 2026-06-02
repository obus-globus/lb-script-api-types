import type { DeprecationInfo } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/deprecation/DeprecationInfo.d.ts'
export abstract class DescriptorBasedDeprecationInfo extends DeprecationInfo {
    constructor()
    getForcePropagationToOverrides(): boolean;
    getPropagatesToOverrides(): boolean;
}