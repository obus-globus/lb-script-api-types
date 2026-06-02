import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ReadyState extends Enum<ReadyState> {
    static CLOSED: ReadyState;
    static CLOSING: ReadyState;
    static NOT_YET_CONNECTED: ReadyState;
    static OPEN: ReadyState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ReadyState;
    static values(): (Object | null)[];
    private constructor()
    name(): "NOT_YET_CONNECTED" | "OPEN" | "CLOSING" | "CLOSED";
}