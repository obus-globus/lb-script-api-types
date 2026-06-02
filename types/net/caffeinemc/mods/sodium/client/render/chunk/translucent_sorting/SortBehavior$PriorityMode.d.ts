import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SortBehavior$PriorityMode extends Enum<SortBehavior$PriorityMode> {
    static ALL: SortBehavior$PriorityMode;
    static NEARBY: SortBehavior$PriorityMode;
    static NONE: SortBehavior$PriorityMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SortBehavior$PriorityMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "NEARBY" | "ALL";
}