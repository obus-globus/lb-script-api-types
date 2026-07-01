import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AbstractCircuitBreaker$State extends Enum<AbstractCircuitBreaker$State> {
    static CLOSED: AbstractCircuitBreaker$State;
    static OPEN: AbstractCircuitBreaker$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AbstractCircuitBreaker$State;
    static values(): (Object | null)[];
    constructor(arg2: any)
    oppositeState(): AbstractCircuitBreaker$State;
    name(): "CLOSED" | "OPEN";
}