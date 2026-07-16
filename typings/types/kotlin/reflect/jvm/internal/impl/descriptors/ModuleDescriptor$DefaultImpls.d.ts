import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
export class ModuleDescriptor$DefaultImpls extends Object {
    static accept<R extends unknown, D extends unknown>(paramarg0: ModuleDescriptor, paramarg1: DeclarationDescriptorVisitor<R, D>, paramarg2: D): R;
    static getContainingDeclaration(paramarg0: ModuleDescriptor): DeclarationDescriptor;
}