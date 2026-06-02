import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAutoPearl$Modes extends Enum<ModuleAutoPearl$Modes> implements Tagged {
    static Companion: Tagged$Companion;
    static TARGET: ModuleAutoPearl$Modes;
    static TRIGGER: ModuleAutoPearl$Modes;
    static getEntries(): ModuleAutoPearl$Modes[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAutoPearl$Modes;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "TRIGGER" | "TARGET";
}