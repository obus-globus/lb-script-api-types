import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Future$State extends Enum<Future$State> {
    static CANCELLED: Future$State;
    static FAILED: Future$State;
    static RUNNING: Future$State;
    static SUCCESS: Future$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Future$State;
    static values(): Future$State[];
    private constructor()
    name(): "RUNNING" | "SUCCESS" | "FAILED" | "CANCELLED";
}