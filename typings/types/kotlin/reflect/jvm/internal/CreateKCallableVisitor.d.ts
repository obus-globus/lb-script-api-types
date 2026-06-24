import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CreateKFunctionVisitor } from '../../../../kotlin/reflect/jvm/internal/CreateKFunctionVisitor.d.ts'
import type { DescriptorKCallable } from '../../../../kotlin/reflect/jvm/internal/DescriptorKCallable.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class CreateKCallableVisitor extends CreateKFunctionVisitor {
    constructor(container: KDeclarationContainerImpl)
    // private container: KDeclarationContainerImpl;
    visitPropertyDescriptor(descriptor: PropertyDescriptor, data: void): DescriptorKCallable<Object>;
}