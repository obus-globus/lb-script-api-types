import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DescriptorKCallable } from '../../../../kotlin/reflect/jvm/internal/DescriptorKCallable.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { FunctionDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { DeclarationDescriptorVisitorEmptyBodies } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/DeclarationDescriptorVisitorEmptyBodies.d.ts'
export class CreateKCallableVisitor extends DeclarationDescriptorVisitorEmptyBodies<DescriptorKCallable<Object>, void> {
    constructor(container: KDeclarationContainerImpl)
    // private container: KDeclarationContainerImpl;
    visitFunctionDescriptor(descriptor: FunctionDescriptor, data: void): DescriptorKCallable<Object>;
    visitPropertyDescriptor(descriptor: PropertyDescriptor, data: void): DescriptorKCallable<Object>;
}