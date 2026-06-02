import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Visibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
export class JavaDescriptorVisibilities extends Object {
    static PACKAGE_VISIBILITY: DescriptorVisibility;
    static PROTECTED_AND_PACKAGE: DescriptorVisibility;
    static PROTECTED_STATIC_VISIBILITY: DescriptorVisibility;
    static toDescriptorVisibility(paramarg0: Visibility): DescriptorVisibility;
}