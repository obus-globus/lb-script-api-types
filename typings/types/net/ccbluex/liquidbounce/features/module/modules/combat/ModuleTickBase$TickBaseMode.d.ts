import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleTickBase$TickBaseMode extends Enum<ModuleTickBase$TickBaseMode> implements Tagged {
    static Companion: Tagged$Companion;
    static FUTURE: ModuleTickBase$TickBaseMode;
    static PAST: ModuleTickBase$TickBaseMode;
    static getEntries(): ModuleTickBase$TickBaseMode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleTickBase$TickBaseMode;
    static values(): ModuleTickBase$TickBaseMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PAST" | "FUTURE";
}