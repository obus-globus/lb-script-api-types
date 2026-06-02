import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class IPCClient$Event extends Enum<IPCClient$Event> {
    static ACTIVITY_JOIN: IPCClient$Event;
    static ACTIVITY_JOIN_REQUEST: IPCClient$Event;
    static ACTIVITY_SPECTATE: IPCClient$Event;
    static ERROR: IPCClient$Event;
    static NULL: IPCClient$Event;
    static READY: IPCClient$Event;
    static UNKNOWN: IPCClient$Event;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IPCClient$Event;
    static values(): (Object | null)[];
    private constructor(arg2: boolean)
    readonly subscribable: boolean;
    isSubscribable(): boolean;
    name(): "NULL" | "READY" | "ERROR" | "ACTIVITY_JOIN" | "ACTIVITY_SPECTATE" | "ACTIVITY_JOIN_REQUEST" | "UNKNOWN";
}