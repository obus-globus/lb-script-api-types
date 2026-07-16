import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PromiseLibrary$State extends Enum<PromiseLibrary$State> {
    static FULFILLED: PromiseLibrary$State;
    static PENDING: PromiseLibrary$State;
    static REJECTED: PromiseLibrary$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PromiseLibrary$State;
    static values(): PromiseLibrary$State[];
    private constructor()
    name(): "PENDING" | "FULFILLED" | "REJECTED";
}