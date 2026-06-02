import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection } from '../../../../../kotlin/reflect/KTypeProjection.d.ts'
import type { KTypeSubstitutor } from '../../../../../kotlin/reflect/jvm/internal/types/KTypeSubstitutor.d.ts'
export class KTypeSubstitutor$Companion extends Object {
    readonly EMPTY: KTypeSubstitutor;
    create(klass: KClass<Object>, arguments: KTypeProjection[]): KTypeSubstitutor;
    create(type: KType): KTypeSubstitutor;
}