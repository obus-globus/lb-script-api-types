import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ReturnValueStatus extends Enum<ReturnValueStatus> {
    static EXPLICITLY_IGNORABLE: ReturnValueStatus;
    static MUST_USE: ReturnValueStatus;
    static UNSPECIFIED: ReturnValueStatus;
    static getEntries(): ReturnValueStatus[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ReturnValueStatus;
    static values(): ReturnValueStatus[];
    private constructor()
    name(): "UNSPECIFIED" | "MUST_USE" | "EXPLICITLY_IGNORABLE";
}