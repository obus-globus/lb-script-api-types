import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RealmsServer$Compatibility extends Enum<RealmsServer$Compatibility> {
    static COMPATIBLE: RealmsServer$Compatibility;
    static INCOMPATIBLE: RealmsServer$Compatibility;
    static NEEDS_DOWNGRADE: RealmsServer$Compatibility;
    static NEEDS_UPGRADE: RealmsServer$Compatibility;
    static RELEASE_TYPE_INCOMPATIBLE: RealmsServer$Compatibility;
    static UNVERIFIABLE: RealmsServer$Compatibility;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RealmsServer$Compatibility;
    static values(): RealmsServer$Compatibility[];
    private constructor()
    isCompatible(): boolean;
    needsDowngrade(): boolean;
    needsUpgrade(): boolean;
    name(): "UNVERIFIABLE" | "INCOMPATIBLE" | "RELEASE_TYPE_INCOMPATIBLE" | "NEEDS_DOWNGRADE" | "NEEDS_UPGRADE" | "COMPATIBLE";
}