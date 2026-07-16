import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class State extends Enum<State> {
    static CLOSED: State;
    static INIT: State;
    static PAUSED: State;
    static WRITING: State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): State;
    static values(): State[];
    private constructor()
    name(): "INIT" | "WRITING" | "PAUSED" | "CLOSED";
}