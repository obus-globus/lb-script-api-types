import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClosingFuture$Status extends Enum<ClosingFuture$Status> {
    static CLOSED: ClosingFuture$Status;
    static CLOSING: ClosingFuture$Status;
    static OPEN: ClosingFuture$Status;
    static SUBSUMED: ClosingFuture$Status;
    static WILL_CLOSE: ClosingFuture$Status;
    static WILL_CREATE_VALUE_AND_CLOSER: ClosingFuture$Status;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ClosingFuture$Status;
    static values(): ClosingFuture$Status[];
    private constructor()
    name(): "OPEN" | "SUBSUMED" | "WILL_CLOSE" | "CLOSING" | "CLOSED" | "WILL_CREATE_VALUE_AND_CLOSER";
}