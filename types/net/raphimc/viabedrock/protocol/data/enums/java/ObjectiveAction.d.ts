import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ObjectiveAction extends Enum<ObjectiveAction> {
    static ADD: ObjectiveAction;
    static CHANGE: ObjectiveAction;
    static REMOVE: ObjectiveAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ObjectiveAction;
    static values(): (Object | null)[];
    private constructor()
    name(): "ADD" | "REMOVE" | "CHANGE";
}