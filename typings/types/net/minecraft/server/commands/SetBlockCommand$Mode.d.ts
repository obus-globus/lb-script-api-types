import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SetBlockCommand$Mode extends Enum<SetBlockCommand$Mode> {
    static DESTROY: SetBlockCommand$Mode;
    static REPLACE: SetBlockCommand$Mode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SetBlockCommand$Mode;
    static values(): SetBlockCommand$Mode[];
    private constructor()
    name(): "REPLACE" | "DESTROY";
}