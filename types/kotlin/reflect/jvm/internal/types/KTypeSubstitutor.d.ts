import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KTypeProjection } from '../../../../../kotlin/reflect/KTypeProjection.d.ts'
import type { KTypeSubstitutor$Companion } from '../../../../../kotlin/reflect/jvm/internal/types/KTypeSubstitutor$Companion.d.ts'
export class KTypeSubstitutor extends Object {
    static Companion: KTypeSubstitutor$Companion;
    constructor(substitution: Map<KTypeParameter, KTypeProjection>)
    // private substitution: Map<KTypeParameter, KTypeProjection>;
    substitute(type: KType): KTypeProjection;
}