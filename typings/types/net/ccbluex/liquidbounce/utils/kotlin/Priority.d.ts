import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Priority extends Enum<Priority> {
    static IMPORTANT_FOR_PLAYER_LIFE: Priority;
    static IMPORTANT_FOR_USAGE_1: Priority;
    static IMPORTANT_FOR_USAGE_2: Priority;
    static IMPORTANT_FOR_USAGE_3: Priority;
    static IMPORTANT_FOR_USER_SAFETY: Priority;
    static NORMAL: Priority;
    static NOT_IMPORTANT: Priority;
    static getEntries(): Priority[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Priority;
    static values(): (Object | null)[];
    private constructor(priority: number)
    readonly priority: number;
    name(): "NOT_IMPORTANT" | "NORMAL" | "IMPORTANT_FOR_USAGE_1" | "IMPORTANT_FOR_USAGE_2" | "IMPORTANT_FOR_USAGE_3" | "IMPORTANT_FOR_PLAYER_LIFE" | "IMPORTANT_FOR_USER_SAFETY";
}