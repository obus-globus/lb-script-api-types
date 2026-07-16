import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class OnErrorResult extends Enum<OnErrorResult> implements Serializable {
    static SKIP_SUBTREE: OnErrorResult;
    static TERMINATE: OnErrorResult;
    static getEntries(): OnErrorResult[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OnErrorResult;
    static values(): OnErrorResult[];
    private constructor()
    name(): "SKIP_SUBTREE" | "TERMINATE";
}