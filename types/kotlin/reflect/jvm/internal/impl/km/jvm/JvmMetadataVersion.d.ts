import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { JvmMetadataVersion$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmMetadataVersion$Companion.d.ts'
export class JvmMetadataVersion extends Object implements Comparable<JvmMetadataVersion> {
    static Companion: JvmMetadataVersion$Companion;
    static HIGHEST_ALLOWED_TO_WRITE: JvmMetadataVersion;
    static LATEST_STABLE_SUPPORTED: JvmMetadataVersion;
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number[])
    // private major: number;
    // private minor: number;
    // private patch: number;
    compareTo(arg0: JvmMetadataVersion): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}