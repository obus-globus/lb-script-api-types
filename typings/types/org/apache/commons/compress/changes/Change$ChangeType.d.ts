import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Change$ChangeType extends Enum<Change$ChangeType> {
    static ADD: Change$ChangeType;
    static DELETE: Change$ChangeType;
    static DELETE_DIR: Change$ChangeType;
    static MOVE: Change$ChangeType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Change$ChangeType;
    static values(): (Object | null)[];
    private constructor()
    name(): "DELETE" | "ADD" | "MOVE" | "DELETE_DIR";
}