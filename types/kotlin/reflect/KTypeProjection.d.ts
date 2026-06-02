import type { Object } from '../../java/lang/Object.d.ts'
import type { KType } from '../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection$Companion } from '../../kotlin/reflect/KTypeProjection$Companion.d.ts'
import type { KVariance } from '../../kotlin/reflect/KVariance.d.ts'
export class KTypeProjection extends Object {
    static Companion: KTypeProjection$Companion;
    static star: KTypeProjection;
    static contravariant(paramarg0: KType): KTypeProjection;
    static covariant(paramarg0: KType): KTypeProjection;
    static invariant(paramarg0: KType): KTypeProjection;
    constructor(variance: KVariance | null, type: KType | null)
    readonly type: KType | null;
    readonly variance: KVariance | null;
    component1(): KVariance | null;
    component2(): KType | null;
    copy(variance: KVariance | null, type: KType | null): KTypeProjection;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}