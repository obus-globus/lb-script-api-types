import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmType } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmTypeProjection$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeProjection$Companion.d.ts'
import type { KmVariance } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmVariance.d.ts'
export class KmTypeProjection extends Object {
    static Companion: KmTypeProjection$Companion;
    static STAR: KmTypeProjection;
    constructor(arg0: KmVariance, arg1: KmType)
    readonly type: KmType;
    readonly variance: KmVariance;
    component1(): KmVariance;
    component2(): KmType;
    equals(arg0: Object | null): boolean;
    getType(): KmType;
    getVariance(): KmVariance;
    hashCode(): number;
    toString(): string;
}