import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ReturnValueStatus extends Enum<ReturnValueStatus> {
    static EXPLICITLY_IGNORABLE: ReturnValueStatus;
    static MUST_USE: ReturnValueStatus;
    static UNSPECIFIED: ReturnValueStatus;
    static getEntries(): ReturnValueStatus[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ReturnValueStatus;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNSPECIFIED" | "MUST_USE" | "EXPLICITLY_IGNORABLE";
}