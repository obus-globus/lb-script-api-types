import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleCustomAmbience$TimeType extends Enum<ModuleCustomAmbience$TimeType> implements Tagged {
    static Companion: Tagged$Companion;
    static DAWN: ModuleCustomAmbience$TimeType;
    static DAY: ModuleCustomAmbience$TimeType;
    static DUSK: ModuleCustomAmbience$TimeType;
    static MID_NIGHT: ModuleCustomAmbience$TimeType;
    static NIGHT: ModuleCustomAmbience$TimeType;
    static NOON: ModuleCustomAmbience$TimeType;
    static NO_CHANGE: ModuleCustomAmbience$TimeType;
    static getEntries(): ModuleCustomAmbience$TimeType[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleCustomAmbience$TimeType;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NO_CHANGE" | "DAWN" | "DAY" | "NOON" | "DUSK" | "NIGHT" | "MID_NIGHT";
}