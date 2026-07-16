import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class OnErrorResult extends Enum<OnErrorResult> implements Serializable {
    static SKIP_SUBTREE: OnErrorResult;
    static TERMINATE: OnErrorResult;
    static getEntries(): OnErrorResult[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): OnErrorResult;
    static values(): OnErrorResult[];
    private constructor()
    name(): "SKIP_SUBTREE" | "TERMINATE";
}