import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
export class ModuleDescriptor$DefaultImpls extends Object {
    static accept(paramarg0: ModuleDescriptor, paramarg1: DeclarationDescriptorVisitor<Object, Object>, paramarg2: Object | null): Object | null;
    static getContainingDeclaration(paramarg0: ModuleDescriptor): DeclarationDescriptor;
}