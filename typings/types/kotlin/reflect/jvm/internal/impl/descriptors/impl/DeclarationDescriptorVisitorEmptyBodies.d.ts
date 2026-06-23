import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { PackageViewDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageViewDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { PropertyGetterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyGetterDescriptor.d.ts'
import type { PropertySetterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertySetterDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { VariableDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/VariableDescriptor.d.ts'
export class DeclarationDescriptorVisitorEmptyBodies<R extends unknown, D extends unknown> extends Object implements DeclarationDescriptorVisitor<R, D> {
    constructor()
    visitClassDescriptor(arg0: ClassDescriptor, arg1: D): R;
    visitConstructorDescriptor(arg0: ConstructorDescriptor, arg1: D): R;
    visitDeclarationDescriptor(arg0: DeclarationDescriptor, arg1: D): R;
    visitFunctionDescriptor(arg0: FunctionDescriptor, arg1: D): R;
    visitModuleDeclaration(arg0: ModuleDescriptor, arg1: D): R;
    visitPackageFragmentDescriptor(arg0: PackageFragmentDescriptor, arg1: D): R;
    visitPackageViewDescriptor(arg0: PackageViewDescriptor, arg1: D): R;
    visitPropertyDescriptor(arg0: PropertyDescriptor, arg1: D): R;
    visitPropertyGetterDescriptor(arg0: PropertyGetterDescriptor, arg1: D): R;
    visitPropertySetterDescriptor(arg0: PropertySetterDescriptor, arg1: D): R;
    visitReceiverParameterDescriptor(arg0: ReceiverParameterDescriptor, arg1: D): R;
    visitTypeAliasDescriptor(arg0: TypeAliasDescriptor, arg1: D): R;
    visitTypeParameterDescriptor(arg0: TypeParameterDescriptor, arg1: D): R;
    visitValueParameterDescriptor(arg0: ValueParameterDescriptor, arg1: D): R;
    visitVariableDescriptor(arg0: VariableDescriptor, arg1: D): R;
}