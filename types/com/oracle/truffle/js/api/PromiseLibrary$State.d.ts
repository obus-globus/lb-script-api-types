import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PromiseLibrary$State extends Enum<PromiseLibrary$State> {
    static FULFILLED: PromiseLibrary$State;
    static PENDING: PromiseLibrary$State;
    static REJECTED: PromiseLibrary$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PromiseLibrary$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "PENDING" | "FULFILLED" | "REJECTED";
}