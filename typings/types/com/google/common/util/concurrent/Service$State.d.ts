import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Service$State extends Enum<Service$State> {
    static FAILED: Service$State;
    static NEW: Service$State;
    static RUNNING: Service$State;
    static STARTING: Service$State;
    static STOPPING: Service$State;
    static TERMINATED: Service$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Service$State;
    static values(): Service$State[];
    private constructor()
    name(): "NEW" | "STARTING" | "RUNNING" | "STOPPING" | "TERMINATED" | "FAILED";
}