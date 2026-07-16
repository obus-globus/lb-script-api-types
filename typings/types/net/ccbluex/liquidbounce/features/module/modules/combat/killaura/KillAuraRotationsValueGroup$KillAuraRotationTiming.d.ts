import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class KillAuraRotationsValueGroup$KillAuraRotationTiming extends Enum<KillAuraRotationsValueGroup$KillAuraRotationTiming> implements Tagged {
    static Companion: Tagged$Companion;
    static NORMAL: KillAuraRotationsValueGroup$KillAuraRotationTiming;
    static ON_TICK: KillAuraRotationsValueGroup$KillAuraRotationTiming;
    static SNAP: KillAuraRotationsValueGroup$KillAuraRotationTiming;
    static getEntries(): KillAuraRotationsValueGroup$KillAuraRotationTiming[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): KillAuraRotationsValueGroup$KillAuraRotationTiming;
    static values(): KillAuraRotationsValueGroup$KillAuraRotationTiming[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NORMAL" | "SNAP" | "ON_TICK";
}