import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RealmsServer$State extends Enum<RealmsServer$State> {
    static CLOSED: RealmsServer$State;
    static OPEN: RealmsServer$State;
    static UNINITIALIZED: RealmsServer$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RealmsServer$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "CLOSED" | "OPEN" | "UNINITIALIZED";
}