import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ReadyState extends Enum<ReadyState> {
    static CLOSED: ReadyState;
    static CLOSING: ReadyState;
    static NOT_YET_CONNECTED: ReadyState;
    static OPEN: ReadyState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ReadyState;
    static values(): ReadyState[];
    private constructor()
    name(): "NOT_YET_CONNECTED" | "OPEN" | "CLOSING" | "CLOSED";
}