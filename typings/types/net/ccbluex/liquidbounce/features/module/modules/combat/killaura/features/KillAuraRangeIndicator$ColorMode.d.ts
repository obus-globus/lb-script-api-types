import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class KillAuraRangeIndicator$ColorMode extends Enum<KillAuraRangeIndicator$ColorMode> implements Tagged {
    static Companion: Tagged$Companion;
    static DISTANCE: KillAuraRangeIndicator$ColorMode;
    static RAINBOW: KillAuraRangeIndicator$ColorMode;
    static STATIC: KillAuraRangeIndicator$ColorMode;
    static getEntries(): KillAuraRangeIndicator$ColorMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KillAuraRangeIndicator$ColorMode;
    static values(): KillAuraRangeIndicator$ColorMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "STATIC" | "RAINBOW" | "DISTANCE";
}