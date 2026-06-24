import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ConstructorDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { PackageViewDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageViewDescriptor.d.ts'
import type { PropertyAccessorDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyAccessorDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { PropertyGetterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyGetterDescriptor.d.ts'
import type { PropertySetterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertySetterDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { DescriptorRendererImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererImpl.d.ts'
export class DescriptorRendererImpl$RenderDeclarationDescriptorVisitor extends Object implements DeclarationDescriptorVisitor<void, StringBuilder> {
    constructor(null_: DescriptorRendererImpl)
    visitClassDescriptor(arg0: ClassDescriptor, arg1: StringBuilder): void;
    visitConstructorDescriptor(arg0: ConstructorDescriptor, arg1: StringBuilder): void;
    visitFunctionDescriptor(arg0: FunctionDescriptor, arg1: StringBuilder): void;
    visitModuleDeclaration(arg0: ModuleDescriptor, arg1: StringBuilder): void;
    visitPackageFragmentDescriptor(arg0: PackageFragmentDescriptor, arg1: StringBuilder): void;
    visitPackageViewDescriptor(arg0: PackageViewDescriptor, arg1: StringBuilder): void;
    // private visitPropertyAccessorDescriptor(arg0: PropertyAccessorDescriptor, arg1: StringBuilder, arg2: string): void;
    visitPropertyDescriptor(arg0: PropertyDescriptor, arg1: StringBuilder): void;
    visitPropertyGetterDescriptor(arg0: PropertyGetterDescriptor, arg1: StringBuilder): void;
    visitPropertySetterDescriptor(arg0: PropertySetterDescriptor, arg1: StringBuilder): void;
    visitReceiverParameterDescriptor(arg0: ReceiverParameterDescriptor, arg1: StringBuilder): void;
    visitTypeAliasDescriptor(arg0: TypeAliasDescriptor, arg1: StringBuilder): void;
    visitTypeParameterDescriptor(arg0: TypeParameterDescriptor, arg1: StringBuilder): void;
    visitValueParameterDescriptor(arg0: ValueParameterDescriptor, arg1: StringBuilder): void;
}