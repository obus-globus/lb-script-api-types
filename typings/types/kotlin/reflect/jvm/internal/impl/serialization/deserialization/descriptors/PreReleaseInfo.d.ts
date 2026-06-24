import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { PreReleaseInfo$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/PreReleaseInfo$Companion.d.ts'
export class PreReleaseInfo extends Object {
    static Companion: PreReleaseInfo$Companion;
    constructor(arg0: boolean, arg1: string[])
    constructor(arg0: boolean, arg1: (Object | null)[], arg2: number, arg3: DefaultConstructorMarker)
    // private isInvisible: boolean;
    // private poisoningFeatures: string[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}