import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AbstractCircuitBreaker$State extends Enum<AbstractCircuitBreaker$State> {
    static CLOSED: AbstractCircuitBreaker$State;
    static OPEN: AbstractCircuitBreaker$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AbstractCircuitBreaker$State;
    static values(): AbstractCircuitBreaker$State[];
    private constructor()
    oppositeState(): AbstractCircuitBreaker$State;
    name(): "CLOSED" | "OPEN";
}