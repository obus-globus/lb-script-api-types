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
import type { Name } from '../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
export class KPackageImpl extends KDeclarationContainerImpl {
    static Companion: KDeclarationContainerImpl$Companion;
    constructor(jClass: Class<Object>)
    equals(other: Object | null): boolean;
    getFunctions(name: Name): FunctionDescriptor[];
    getLocalProperty(index: number): PropertyDescriptor | null;
    getProperties(name: Name): PropertyDescriptor[];
    hashCode(): number;
    toString(): string;
}