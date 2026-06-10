import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { KotlinTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
export class KotlinTypeRefiner$Default extends KotlinTypeRefiner {
    static INSTANCE: KotlinTypeRefiner$Default;
    private constructor()
    findClassAcrossModuleDependencies(arg0: ClassId): ClassDescriptor;
    getOrPutScopeForClass<S extends MemberScope>(arg0: ClassDescriptor, arg1: () => S): S;
    isRefinementNeededForModule(arg0: ModuleDescriptor): boolean;
    isRefinementNeededForTypeConstructor(arg0: TypeConstructor): boolean;
    refineDescriptor(arg0: DeclarationDescriptor): ClassDescriptor;
    refineSupertypes(arg0: ClassDescriptor): KotlinType[];
    refineType(arg0: KotlinTypeMarker): KotlinType;
}