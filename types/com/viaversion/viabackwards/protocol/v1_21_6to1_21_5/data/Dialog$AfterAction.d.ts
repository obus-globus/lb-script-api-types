import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Dialog$AfterAction extends Enum<Dialog$AfterAction> {
    static CLOSE: Dialog$AfterAction;
    static NONE: Dialog$AfterAction;
    static WAIT_FOR_RESPONSE: Dialog$AfterAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Dialog$AfterAction;
    static values(): (Object | null)[];
    private constructor()
    name(): "CLOSE" | "NONE" | "WAIT_FOR_RESPONSE";
}