import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RealmsServer$State extends Enum<RealmsServer$State> {
    static CLOSED: RealmsServer$State;
    static OPEN: RealmsServer$State;
    static UNINITIALIZED: RealmsServer$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RealmsServer$State;
    static values(): RealmsServer$State[];
    private constructor()
    name(): "CLOSED" | "OPEN" | "UNINITIALIZED";
}