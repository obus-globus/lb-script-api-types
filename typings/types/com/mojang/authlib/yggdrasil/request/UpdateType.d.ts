import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class UpdateType extends Enum<UpdateType> {
    static ADD: UpdateType;
    static REMOVE: UpdateType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): UpdateType;
    static values(): UpdateType[];
    private constructor()
    name(): "ADD" | "REMOVE";
}