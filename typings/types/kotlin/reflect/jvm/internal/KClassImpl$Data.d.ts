import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KFunction } from '../../../../kotlin/reflect/KFunction.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { FakeOverrideMembers } from '../../../../kotlin/reflect/jvm/internal/FakeOverrideMembers.d.ts'
import type { KClassImpl } from '../../../../kotlin/reflect/jvm/internal/KClassImpl.d.ts'
import type { KDeclarationContainerImpl$Data } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl$Data.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { TypeParameterTable } from '../../../../kotlin/reflect/jvm/internal/TypeParameterTable.d.ts'
import type { ClassDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { KmClass } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmClass.d.ts'
export class KClassImpl$Data extends KDeclarationContainerImpl$Data {
    constructor(null_: KClassImpl<Object>)
    readonly allMembers: ReflectKCallable<Object>[];
    readonly allNonStaticMembers: ReflectKCallable<Object>[];
    readonly allStaticMembers: ReflectKCallable<Object>[];
    readonly annotations: Annotation[];
    readonly constructors: KFunction<T>[];
    readonly declaredMembers: ReflectKCallable<Object>[];
    readonly declaredNonStaticMembers: ReflectKCallable<Object>[];
    // private declaredStaticMembers: ReflectKCallable<Object>[];
    // private /*not mapped: */ getDeclaredStaticMembers(): ReflectKCallable<Object>[];
    readonly descriptor: ClassDescriptor;
    // private fakeOverrideMembers: FakeOverrideMembers;
    /*not mapped: */ getFakeOverrideMembers$kotlin_reflection(): FakeOverrideMembers;
    // private inheritedNonStaticMembers_k1Impl: ReflectKCallable<Object>[];
    // private /*not mapped: */ getInheritedNonStaticMembers_k1Impl(): ReflectKCallable<Object>[];
    // private inheritedStaticMembers_k1Impl: ReflectKCallable<Object>[];
    // private /*not mapped: */ getInheritedStaticMembers_k1Impl(): ReflectKCallable<Object>[];
    // private inlineClassUnderlyingType: KType | null;
    /*not mapped: */ getInlineClassUnderlyingType$kotlin_reflection(): KType | null;
    readonly kmClass: KmClass | null;
    readonly nestedClasses: KClass<Object>[];
    readonly objectInstance: T | null;
    readonly qualifiedName: string | null;
    readonly sealedSubclasses: KClass<T>[];
    readonly simpleName: string | null;
    readonly supertypes: KType[];
    // private typeParameterTable: TypeParameterTable;
    /*not mapped: */ getTypeParameterTable$kotlin_reflection(): TypeParameterTable;
    readonly typeParameters: KTypeParameter[];
    // private calculateLocalClassName(jClass: Class<Object>): string;
    // private computeLegacySupertypes(): KType[];
    // private isClassWithAdditionalConstructorsFromMappedType(): boolean;
    // private useK1ImplementationForFakeOverrides(): boolean;
}