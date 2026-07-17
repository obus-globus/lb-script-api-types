import type { Class } from '../../../../../../../java/lang/Class.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleAutoClicker$AttackButton$ObjectiveType;
    static values(): ModuleAutoClicker$AttackButton$ObjectiveType[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "ENEMY" | "ENTITY" | "BLOCK" | "ANY";
}