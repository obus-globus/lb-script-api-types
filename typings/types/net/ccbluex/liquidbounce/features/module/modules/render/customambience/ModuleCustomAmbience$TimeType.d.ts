import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleCustomAmbience$TimeType;
    static values(): ModuleCustomAmbience$TimeType[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NO_CHANGE" | "DAWN" | "DAY" | "NOON" | "DUSK" | "NIGHT" | "MID_NIGHT";
}