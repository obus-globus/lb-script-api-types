import type { Class } from '../../../../../java/lang/Class.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): Priority;
    static values(): Priority[];
    private constructor(priority: number)
    readonly priority: number;
    name(): "NOT_IMPORTANT" | "NORMAL" | "IMPORTANT_FOR_USAGE_1" | "IMPORTANT_FOR_USAGE_2" | "IMPORTANT_FOR_USAGE_3" | "IMPORTANT_FOR_PLAYER_LIFE" | "IMPORTANT_FOR_USER_SAFETY";
}