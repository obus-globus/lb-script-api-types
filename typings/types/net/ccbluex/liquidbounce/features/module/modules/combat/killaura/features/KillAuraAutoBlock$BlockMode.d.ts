import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class KillAuraAutoBlock$BlockMode extends Enum<KillAuraAutoBlock$BlockMode> implements Tagged {
    static BASIC: KillAuraAutoBlock$BlockMode;
    static Companion: Tagged$Companion;
    static FAKE: KillAuraAutoBlock$BlockMode;
    static INTERACT: KillAuraAutoBlock$BlockMode;
    static getEntries(): KillAuraAutoBlock$BlockMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KillAuraAutoBlock$BlockMode;
    static values(): KillAuraAutoBlock$BlockMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "BASIC" | "INTERACT" | "FAKE";
}