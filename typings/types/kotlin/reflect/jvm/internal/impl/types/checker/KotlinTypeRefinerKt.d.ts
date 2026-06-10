import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleCapability } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleCapability.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { Ref } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/Ref.d.ts'
import type { TypeRefinementSupport } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/TypeRefinementSupport.d.ts'
export class KotlinTypeRefinerKt extends Object {
    static getREFINER_CAPABILITY(): ModuleCapability<Ref<TypeRefinementSupport>>;
    static refineTypes(paramarg0: KotlinTypeRefiner, paramarg1: KotlinType[]): KotlinType[];
}