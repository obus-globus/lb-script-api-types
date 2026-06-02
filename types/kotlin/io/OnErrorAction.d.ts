import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class OnErrorAction extends Enum<OnErrorAction> implements Serializable {
    static SKIP: OnErrorAction;
    static TERMINATE: OnErrorAction;
    static getEntries(): OnErrorAction[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OnErrorAction;
    static values(): (Object | null)[];
    private constructor()
    name(): "SKIP" | "TERMINATE";
}