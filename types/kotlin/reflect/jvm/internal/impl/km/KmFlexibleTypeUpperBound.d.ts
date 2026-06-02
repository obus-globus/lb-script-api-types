import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmFlexibleTypeUpperBound$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmFlexibleTypeUpperBound$Companion.d.ts'
import type { KmType } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
export class KmFlexibleTypeUpperBound extends Object {
    static Companion: KmFlexibleTypeUpperBound$Companion;
    constructor(arg0: KmType, arg1: string)
    readonly type: KmType;
    readonly typeFlexibilityId: string;
    equals(arg0: Object | null): boolean;
    getType(): KmType;
    getTypeFlexibilityId(): string;
    hashCode(): number;
    toString(): string;
}