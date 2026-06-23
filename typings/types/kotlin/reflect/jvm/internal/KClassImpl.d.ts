import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { DescriptorKCallable } from '../../../../kotlin/reflect/jvm/internal/DescriptorKCallable.d.ts'
import type { KClassImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KClassImpl$Companion.d.ts'
import type { KClassImpl$MemberBelonginess } from '../../../../kotlin/reflect/jvm/internal/KClassImpl$MemberBelonginess.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KDeclarationContainerImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl$Companion.d.ts'
import type { KTypeParameterOwnerImpl } from '../../../../kotlin/reflect/jvm/internal/KTypeParameterOwnerImpl.d.ts'
import type { ClassDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { RuntimeModuleData } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/components/RuntimeModuleData.d.ts'
import type { ClassId } from '../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { TypeConstructorMarker } from '../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
export class KClassImpl<T extends unknown> extends KDeclarationContainerImpl implements KClass<T>, KTypeParameterOwnerImpl, TypeConstructorMarker {
    static Companion: KClassImpl$Companion;
    static Companion: KDeclarationContainerImpl$Companion;
    constructor(jClass: Class<T>)
    // private createSyntheticClass(classId: ClassId, moduleData: RuntimeModuleData): ClassDescriptor;
    // private createSyntheticClassOrFail(classId: ClassId, moduleData: RuntimeModuleData): ClassDescriptor;
    equals(other: Object | null): boolean;
    getFunctions(name: Name): FunctionDescriptor[];
    getLocalProperty(index: number): PropertyDescriptor | null;
    // private getMembers(scope: MemberScope, belonginess: KClassImpl$MemberBelonginess): DescriptorKCallable<Object>[];
    getProperties(name: Name): PropertyDescriptor[];
    hashCode(): number;
    isInstance(value: Object | null): boolean;
    toString(): string;
}