import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleCapability } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleCapability.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class KotlinTypeRefinerKt extends Object {
    static getREFINER_CAPABILITY(): ModuleCapability<Object>;
    static refineTypes(paramarg0: KotlinTypeRefiner, paramarg1: (Object | null)[]): KotlinType[];
}