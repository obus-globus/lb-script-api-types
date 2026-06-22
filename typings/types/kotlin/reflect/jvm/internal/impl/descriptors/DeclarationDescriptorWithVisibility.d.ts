import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface DeclarationDescriptorWithVisibility extends Object, DeclarationDescriptor{
    getContainingDeclaration(): DeclarationDescriptor;
    getName(): Name;
    getOriginal(): DeclarationDescriptor;
    getVisibility(): DescriptorVisibility;
}