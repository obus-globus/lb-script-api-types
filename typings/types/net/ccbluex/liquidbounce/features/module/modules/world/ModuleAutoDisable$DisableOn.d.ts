import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
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
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAutoDisable$DisableOn;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "FLAG" | "DEATH" | "WORLD_CHANGE" | "DISCONNECT";
}