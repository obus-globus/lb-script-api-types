import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAutoDisable$DisableOn extends Enum<ModuleAutoDisable$DisableOn> implements Tagged {
    static Companion: Tagged$Companion;
    static DEATH: ModuleAutoDisable$DisableOn;
    static DISCONNECT: ModuleAutoDisable$DisableOn;
    static FLAG: ModuleAutoDisable$DisableOn;
    static WORLD_CHANGE: ModuleAutoDisable$DisableOn;
    static getEntries(): ModuleAutoDisable$DisableOn[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleAutoDisable$DisableOn;
    static values(): ModuleAutoDisable$DisableOn[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "FLAG" | "DEATH" | "WORLD_CHANGE" | "DISCONNECT";
}