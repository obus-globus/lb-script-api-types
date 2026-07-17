import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class NavigationBaseValueGroup$AutoAction extends Enum<NavigationBaseValueGroup$AutoAction> implements Tagged {
    static Companion: Tagged$Companion;
    static JUMP: NavigationBaseValueGroup$AutoAction;
    static SPRINT: NavigationBaseValueGroup$AutoAction;
    static SWIM: NavigationBaseValueGroup$AutoAction;
    static getEntries(): NavigationBaseValueGroup$AutoAction[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): NavigationBaseValueGroup$AutoAction;
    static values(): NavigationBaseValueGroup$AutoAction[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "JUMP" | "SWIM" | "SPRINT";
}