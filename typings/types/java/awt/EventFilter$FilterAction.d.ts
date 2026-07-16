import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class EventFilter$FilterAction extends Enum<EventFilter$FilterAction> {
    static ACCEPT: EventFilter$FilterAction;
    static ACCEPT_IMMEDIATELY: EventFilter$FilterAction;
    static REJECT: EventFilter$FilterAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EventFilter$FilterAction;
    static values(): EventFilter$FilterAction[];
    private constructor()
    name(): "ACCEPT" | "REJECT" | "ACCEPT_IMMEDIATELY";
}