import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { TypeRefinementSupport } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/TypeRefinementSupport.d.ts'
export class TypeRefinementSupport$Enabled extends TypeRefinementSupport {
    readonly typeRefiner: KotlinTypeRefiner;
    getTypeRefiner(): KotlinTypeRefiner;
}