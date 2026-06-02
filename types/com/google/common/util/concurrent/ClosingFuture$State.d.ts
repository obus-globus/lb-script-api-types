import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClosingFuture$State extends Enum<ClosingFuture$State> {
    static CLOSED: ClosingFuture$State;
    static CLOSING: ClosingFuture$State;
    static OPEN: ClosingFuture$State;
    static SUBSUMED: ClosingFuture$State;
    static WILL_CLOSE: ClosingFuture$State;
    static WILL_CREATE_VALUE_AND_CLOSER: ClosingFuture$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ClosingFuture$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "OPEN" | "SUBSUMED" | "WILL_CLOSE" | "CLOSING" | "CLOSED" | "WILL_CREATE_VALUE_AND_CLOSER";
}