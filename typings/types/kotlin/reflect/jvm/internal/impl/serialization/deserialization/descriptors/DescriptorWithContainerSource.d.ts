import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { MemberDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/MemberDescriptor.d.ts'
import type { Modality } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { SourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface DescriptorWithContainerSource extends Object, MemberDescriptor{
    getContainingDeclaration(): DeclarationDescriptor;
    getModality(): Modality;
    getName(): Name;
    getOriginal(): DeclarationDescriptor;
    getSource(): SourceElement;
    getVisibility(): DescriptorVisibility;
    isActual(): boolean;
    isExpect(): boolean;
    isExternal(): boolean;
}