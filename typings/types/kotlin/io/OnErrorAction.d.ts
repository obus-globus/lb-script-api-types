import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class OnErrorAction extends Enum<OnErrorAction> implements Serializable {
    static SKIP: OnErrorAction;
    static TERMINATE: OnErrorAction;
    static getEntries(): OnErrorAction[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): OnErrorAction;
    static values(): OnErrorAction[];
    private constructor()
    name(): "SKIP" | "TERMINATE";
}