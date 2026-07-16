import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PipeStatus extends Enum<PipeStatus> {
    static CLOSED: PipeStatus;
    static CLOSING: PipeStatus;
    static CONNECTED: PipeStatus;
    static CONNECTING: PipeStatus;
    static DISCONNECTED: PipeStatus;
    static UNINITIALIZED: PipeStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PipeStatus;
    static values(): PipeStatus[];
    private constructor()
    name(): "UNINITIALIZED" | "CONNECTING" | "CONNECTED" | "CLOSING" | "CLOSED" | "DISCONNECTED";
}