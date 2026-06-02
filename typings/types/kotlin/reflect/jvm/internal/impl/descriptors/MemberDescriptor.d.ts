import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptorNonRoot } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorNonRoot.d.ts'
import type { DeclarationDescriptorWithVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorWithVisibility.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
export interface MemberDescriptor extends Object, DeclarationDescriptorNonRoot, DeclarationDescriptorWithVisibility{
    getModality(): Modality;
    getVisibility(): DescriptorVisibility;
    isActual(): boolean;
    isExpect(): boolean;
    isExternal(): boolean;
}