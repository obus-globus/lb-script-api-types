import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LifeCycle$State extends Enum<LifeCycle$State> {
    static INITIALIZED: LifeCycle$State;
    static INITIALIZING: LifeCycle$State;
    static STARTED: LifeCycle$State;
    static STARTING: LifeCycle$State;
    static STOPPED: LifeCycle$State;
    static STOPPING: LifeCycle$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LifeCycle$State;
    static values(): LifeCycle$State[];
    private constructor()
    name(): "INITIALIZING" | "INITIALIZED" | "STARTING" | "STARTED" | "STOPPING" | "STOPPED";
}