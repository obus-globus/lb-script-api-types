import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleNoSlowBreak$When extends Enum<ModuleNoSlowBreak$When> implements Tagged {
    static Companion: Tagged$Companion;
    static MINING_FATIGUE: ModuleNoSlowBreak$When;
    static ON_AIR: ModuleNoSlowBreak$When;
    static UNDERWATER: ModuleNoSlowBreak$When;
    static getEntries(): ModuleNoSlowBreak$When[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleNoSlowBreak$When;
    static values(): ModuleNoSlowBreak$When[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "MINING_FATIGUE" | "ON_AIR" | "UNDERWATER";
}