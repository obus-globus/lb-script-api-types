import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ObjectiveAction extends Enum<ObjectiveAction> {
    static ADD: ObjectiveAction;
    static CHANGE: ObjectiveAction;
    static REMOVE: ObjectiveAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ObjectiveAction;
    static values(): ObjectiveAction[];
    private constructor()
    name(): "ADD" | "REMOVE" | "CHANGE";
}