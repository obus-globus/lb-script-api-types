import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class OSService$State extends Enum<OSService$State> {
    static OTHER: OSService$State;
    static RUNNING: OSService$State;
    static STOPPED: OSService$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OSService$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "RUNNING" | "STOPPED" | "OTHER";
}