import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAutoClicker$AttackButton$Use extends Enum<ModuleAutoClicker$AttackButton$Use> implements Tagged {
    static Companion: Tagged$Companion;
    static IGNORE: ModuleAutoClicker$AttackButton$Use;
    static STOP: ModuleAutoClicker$AttackButton$Use;
    static WAIT: ModuleAutoClicker$AttackButton$Use;
    static getEntries(): ModuleAutoClicker$AttackButton$Use[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAutoClicker$AttackButton$Use;
    static values(): ModuleAutoClicker$AttackButton$Use[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "WAIT" | "STOP" | "IGNORE";
}