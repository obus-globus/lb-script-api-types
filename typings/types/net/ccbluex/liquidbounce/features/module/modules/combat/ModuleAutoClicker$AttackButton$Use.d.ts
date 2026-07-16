import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAutoClicker$AttackButton$Use extends Enum<ModuleAutoClicker$AttackButton$Use> implements Tagged {
    static Companion: Tagged$Companion;
    static IGNORE: ModuleAutoClicker$AttackButton$Use;
    static STOP: ModuleAutoClicker$AttackButton$Use;
    static WAIT: ModuleAutoClicker$AttackButton$Use;
    static getEntries(): ModuleAutoClicker$AttackButton$Use[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleAutoClicker$AttackButton$Use;
    static values(): ModuleAutoClicker$AttackButton$Use[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "WAIT" | "STOP" | "IGNORE";
}