import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Thread$State extends Enum<Thread$State> {
    static BLOCKED: Thread$State;
    static NEW: Thread$State;
    static RUNNABLE: Thread$State;
    static TERMINATED: Thread$State;
    static TIMED_WAITING: Thread$State;
    static WAITING: Thread$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Thread$State;
    static values(): Thread$State[];
    private constructor()
    name(): "NEW" | "RUNNABLE" | "BLOCKED" | "WAITING" | "TIMED_WAITING" | "TERMINATED";
}