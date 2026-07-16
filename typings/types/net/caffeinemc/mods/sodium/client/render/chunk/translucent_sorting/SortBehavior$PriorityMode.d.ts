import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SortBehavior$PriorityMode extends Enum<SortBehavior$PriorityMode> {
    static ALL: SortBehavior$PriorityMode;
    static NEARBY: SortBehavior$PriorityMode;
    static NONE: SortBehavior$PriorityMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SortBehavior$PriorityMode;
    static values(): SortBehavior$PriorityMode[];
    private constructor()
    name(): "NONE" | "NEARBY" | "ALL";
}