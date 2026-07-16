import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class OSService$State extends Enum<OSService$State> {
    static OTHER: OSService$State;
    static RUNNING: OSService$State;
    static STOPPED: OSService$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): OSService$State;
    static values(): OSService$State[];
    private constructor()
    name(): "RUNNING" | "STOPPED" | "OTHER";
}