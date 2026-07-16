import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class AbstractIterator$State extends Enum<AbstractIterator$State> {
    static DONE: AbstractIterator$State;
    static FAILED: AbstractIterator$State;
    static NOT_READY: AbstractIterator$State;
    static READY: AbstractIterator$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AbstractIterator$State;
    static values(): AbstractIterator$State[];
    private constructor()
    name(): "READY" | "NOT_READY" | "DONE" | "FAILED";
}