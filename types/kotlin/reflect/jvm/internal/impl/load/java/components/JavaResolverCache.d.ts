import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ConstructorDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { JavaClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { JavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaElement.d.ts'
import type { JavaField } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaField.d.ts'
import type { JavaMember } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMember.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export interface JavaResolverCache extends Object{
    getClassResolvedFromSource(arg0: FqName): ClassDescriptor;
    recordClass(arg0: JavaClass, arg1: ClassDescriptor): void;
    recordConstructor(arg0: JavaElement, arg1: ConstructorDescriptor): void;
    recordField(arg0: JavaField, arg1: PropertyDescriptor): void;
    recordMethod(arg0: JavaMember, arg1: SimpleFunctionDescriptor): void;
}