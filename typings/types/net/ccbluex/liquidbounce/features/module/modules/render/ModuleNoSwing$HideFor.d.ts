import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleNoSwing$HideFor extends Enum<ModuleNoSwing$HideFor> implements Tagged {
    static CLIENT: ModuleNoSwing$HideFor;
    static Companion: Tagged$Companion;
    static SERVER: ModuleNoSwing$HideFor;
    static getEntries(): ModuleNoSwing$HideFor[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleNoSwing$HideFor;
    static values(): ModuleNoSwing$HideFor[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "CLIENT" | "SERVER";
}