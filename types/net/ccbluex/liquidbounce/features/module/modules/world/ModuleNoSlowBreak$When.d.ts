import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleNoSlowBreak$When extends Enum<ModuleNoSlowBreak$When> implements Tagged {
    static Companion: Tagged$Companion;
    static MINING_FATIGUE: ModuleNoSlowBreak$When;
    static ON_AIR: ModuleNoSlowBreak$When;
    static UNDERWATER: ModuleNoSlowBreak$When;
    static getEntries(): ModuleNoSlowBreak$When[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleNoSlowBreak$When;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "MINING_FATIGUE" | "ON_AIR" | "UNDERWATER";
}