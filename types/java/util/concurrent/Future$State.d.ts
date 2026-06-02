import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Future$State extends Enum<Future$State> {
    static CANCELLED: Future$State;
    static FAILED: Future$State;
    static RUNNING: Future$State;
    static SUCCESS: Future$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Future$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "RUNNING" | "SUCCESS" | "FAILED" | "CANCELLED";
}