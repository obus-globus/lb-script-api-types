import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KDeclarationContainerImpl$Data } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl$Data.d.ts'
import type { TypeParameterTable } from '../../../../kotlin/reflect/jvm/internal/TypeParameterTable.d.ts'
import type { ClassDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { KmClass } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmClass.d.ts'
export class KClassImpl$Data extends KDeclarationContainerImpl$Data {
    constructor(null_: KClassImpl$Data)
    readonly allMembers: E[];
    readonly allNonStaticMembers: E[];
    readonly allStaticMembers: E[];
    readonly annotations: Annotation[];
    readonly constructors: E[];
    readonly declaredMembers: E[];
    readonly declaredNonStaticMembers: E[];
    // private declaredStaticMembers: E[];
    // private /*not mapped: */ getDeclaredStaticMembers(): E[];
    readonly descriptor: ClassDescriptor;
    // private inheritedNonStaticMembers: E[];
    // private /*not mapped: */ getInheritedNonStaticMembers(): E[];
    // private inheritedStaticMembers: E[];
    // private /*not mapped: */ getInheritedStaticMembers(): E[];
    readonly kmClass: KmClass | null;
    readonly nestedClasses: E[];
    readonly objectInstance: T | null;
    readonly qualifiedName: string | null;
    readonly sealedSubclasses: KClass<T>[];
    readonly simpleName: string | null;
    readonly supertypes: KType[];
    // private typeParameterTable: TypeParameterTable;
    // private /*not mapped: */ getTypeParameterTable(): TypeParameterTable;
    readonly typeParameters: KTypeParameter[];
    // private calculateLocalClassName(jClass: Class<Object>): string;
    // private computeLegacySupertypes(): KType[];
}