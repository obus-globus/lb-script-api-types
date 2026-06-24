import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KCallable } from '../../../../kotlin/reflect/KCallable.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KDeclarationContainerImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl$Companion.d.ts'
import type { KPackageImpl$Data } from '../../../../kotlin/reflect/jvm/internal/KPackageImpl$Data.d.ts'
import type { ConstructorDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { KmConstructor } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmConstructor.d.ts'
import type { KmFunction } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmProperty } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { Name } from '../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { Regex } from '../../../../kotlin/text/Regex.d.ts'
export class KPackageImpl extends KDeclarationContainerImpl {
    static Companion: KDeclarationContainerImpl$Companion;
    static LOCAL_PROPERTY_SIGNATURE: Regex;
    constructor(jClass: Class<Object>)
    readonly constructorDescriptors: ConstructorDescriptor[];
    readonly constructorsMetadata: KmConstructor[];
    // private data: Lazy<KPackageImpl$Data>;
    readonly functionsMetadata: KmFunction[];
    /*not mapped: */ isMultifilePart$kotlin_reflection(): boolean;
    // private jClass: Class<Object>;
    /*not mapped: */ getJClass(): Class<Object>;
    readonly members: KCallable<Object>[];
    // private /*not mapped: */ getMethodOwner(): Class<Object>;
    readonly propertiesMetadata: KmProperty[];
    // private /*not mapped: */ getScope(): MemberScope;
    equals(other: Object | null): boolean;
    getFunctions(name: Name): FunctionDescriptor[];
    getLocalPropertyDescriptor(index: number): PropertyDescriptor | null;
    getLocalPropertyMetadata(index: number): KmProperty | null;
    getProperties(name: Name): PropertyDescriptor[];
    hashCode(): number;
    toString(): string;
}