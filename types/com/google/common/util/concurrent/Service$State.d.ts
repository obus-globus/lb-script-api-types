import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Service$State extends Enum<Service$State> {
    static FAILED: Service$State;
    static NEW: Service$State;
    static RUNNING: Service$State;
    static STARTING: Service$State;
    static STOPPING: Service$State;
    static TERMINATED: Service$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Service$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "NEW" | "STARTING" | "RUNNING" | "STOPPING" | "TERMINATED" | "FAILED";
}