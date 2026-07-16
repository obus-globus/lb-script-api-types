import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class KillAuraAutoBlock$BlockMode extends Enum<KillAuraAutoBlock$BlockMode> implements Tagged {
    static BASIC: KillAuraAutoBlock$BlockMode;
    static Companion: Tagged$Companion;
    static FAKE: KillAuraAutoBlock$BlockMode;
    static INTERACT: KillAuraAutoBlock$BlockMode;
    static getEntries(): KillAuraAutoBlock$BlockMode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): KillAuraAutoBlock$BlockMode;
    static values(): KillAuraAutoBlock$BlockMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "BASIC" | "INTERACT" | "FAKE";
}