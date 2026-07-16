import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Change$ChangeType extends Enum<Change$ChangeType> {
    static ADD: Change$ChangeType;
    static DELETE: Change$ChangeType;
    static DELETE_DIR: Change$ChangeType;
    static MOVE: Change$ChangeType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Change$ChangeType;
    static values(): Change$ChangeType[];
    private constructor()
    name(): "DELETE" | "ADD" | "MOVE" | "DELETE_DIR";
}