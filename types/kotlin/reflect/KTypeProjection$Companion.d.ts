import type { Object } from '../../java/lang/Object.d.ts'
import type { KType } from '../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection } from '../../kotlin/reflect/KTypeProjection.d.ts'
export class KTypeProjection$Companion extends Object {
    readonly STAR: KTypeProjection;
    star: KTypeProjection;
    contravariant(type: KType): KTypeProjection;
    covariant(type: KType): KTypeProjection;
    invariant(type: KType): KTypeProjection;
}