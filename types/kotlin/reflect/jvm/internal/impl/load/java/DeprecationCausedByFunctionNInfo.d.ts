import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeprecationLevelValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/deprecation/DeprecationLevelValue.d.ts'
import type { DescriptorBasedDeprecationInfo } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/deprecation/DescriptorBasedDeprecationInfo.d.ts'
export class DeprecationCausedByFunctionNInfo extends DescriptorBasedDeprecationInfo {
    constructor(arg0: DeclarationDescriptor)
    // private target: DeclarationDescriptor;
    getDeprecationLevel(): DeprecationLevelValue;
}