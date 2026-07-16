import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Taskbar$State extends Enum<Taskbar$State> {
    static ERROR: Taskbar$State;
    static INDETERMINATE: Taskbar$State;
    static NORMAL: Taskbar$State;
    static OFF: Taskbar$State;
    static PAUSED: Taskbar$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Taskbar$State;
    static values(): Taskbar$State[];
    private constructor()
    name(): "OFF" | "NORMAL" | "PAUSED" | "INDETERMINATE" | "ERROR";
}