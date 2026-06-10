import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAutoClicker$AttackButton$ObjectiveType extends Enum<ModuleAutoClicker$AttackButton$ObjectiveType> implements Tagged {
    static ANY: ModuleAutoClicker$AttackButton$ObjectiveType;
    static BLOCK: ModuleAutoClicker$AttackButton$ObjectiveType;
    static Companion: Tagged$Companion;
    static ENEMY: ModuleAutoClicker$AttackButton$ObjectiveType;
    static ENTITY: ModuleAutoClicker$AttackButton$ObjectiveType;
    static getEntries(): ModuleAutoClicker$AttackButton$ObjectiveType[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAutoClicker$AttackButton$ObjectiveType;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "ENEMY" | "ENTITY" | "BLOCK" | "ANY";
}