import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class OSProcess$State extends Enum<OSProcess$State> {
    static INVALID: OSProcess$State;
    static NEW: OSProcess$State;
    static OTHER: OSProcess$State;
    static RUNNING: OSProcess$State;
    static SLEEPING: OSProcess$State;
    static STOPPED: OSProcess$State;
    static SUSPENDED: OSProcess$State;
    static WAITING: OSProcess$State;
    static ZOMBIE: OSProcess$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OSProcess$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "NEW" | "RUNNING" | "SLEEPING" | "WAITING" | "ZOMBIE" | "STOPPED" | "OTHER" | "INVALID" | "SUSPENDED";
}