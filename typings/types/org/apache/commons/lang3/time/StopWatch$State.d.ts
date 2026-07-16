import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class StopWatch$State extends Enum<StopWatch$State> {
    static RUNNING: StopWatch$State;
    static STOPPED: StopWatch$State;
    static SUSPENDED: StopWatch$State;
    static UNSTARTED: StopWatch$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StopWatch$State;
    static values(): StopWatch$State[];
    constructor(arg2: any)
    isStarted(): boolean;
    isStopped(): boolean;
    isSuspended(): boolean;
    name(): "RUNNING" | "STOPPED" | "SUSPENDED" | "UNSTARTED";
}