import type { Class } from '../../../../java/lang/Class.d.ts'
import type { GenericDeclaration } from '../../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KotlinGenericDeclaration } from '../../../../kotlin/jvm/internal/KotlinGenericDeclaration.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KFunction } from '../../../../kotlin/reflect/KFunction.d.ts'
import type { DescriptorKCallable } from '../../../../kotlin/reflect/jvm/internal/DescriptorKCallable.d.ts'
import type { KClassImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KClassImpl$Companion.d.ts'
import type { KClassImpl$Data } from '../../../../kotlin/reflect/jvm/internal/KClassImpl$Data.d.ts'
import type { KClassImpl$MemberBelonginess } from '../../../../kotlin/reflect/jvm/internal/KClassImpl$MemberBelonginess.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KDeclarationContainerImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl$Companion.d.ts'
import type { KTypeParameterOwnerImpl } from '../../../../kotlin/reflect/jvm/internal/KTypeParameterOwnerImpl.d.ts'
import type { ClassDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ConstructorDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { RuntimeModuleData } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/components/RuntimeModuleData.d.ts'
import type { ClassKind } from '../../../../kotlin/reflect/jvm/internal/impl/km/ClassKind.d.ts'
import type { KmConstructor } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmConstructor.d.ts'
import type { KmFunction } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmProperty } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { ClassId } from '../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { TypeConstructorMarker } from '../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
import type { Regex } from '../../../../kotlin/text/Regex.d.ts'
export class KClassImpl<T extends unknown> extends KDeclarationContainerImpl implements KotlinGenericDeclaration, KClass<T>, KTypeParameterOwnerImpl, TypeConstructorMarker {
    static Companion: KClassImpl$Companion;
    static Companion: KDeclarationContainerImpl$Companion;
    static LOCAL_PROPERTY_SIGNATURE: Regex;
    constructor(jClass: Class<T>)
    // private createSyntheticClass(classId: ClassId, moduleData: RuntimeModuleData): ClassDescriptor;
    // private createSyntheticClassOrFail(classId: ClassId, moduleData: RuntimeModuleData): ClassDescriptor;
    equals(other: Object | null): boolean;
    findJavaDeclaration(): GenericDeclaration;
    getFunctions(name: Name): FunctionDescriptor[];
    getLocalPropertyDescriptor(index: number): PropertyDescriptor | null;
    getLocalPropertyMetadata(index: number): KmProperty | null;
    // private getMembers(scope: MemberScope, belonginess: KClassImpl$MemberBelonginess): DescriptorKCallable<Object>[];
    getProperties(name: Name): PropertyDescriptor[];
    hashCode(): number;
    isInstance(value: Object | null): boolean;
    toString(): string;
}