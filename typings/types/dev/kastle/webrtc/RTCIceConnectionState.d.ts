import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCIceConnectionState extends Enum<RTCIceConnectionState> {
    static CHECKING: RTCIceConnectionState;
    static CLOSED: RTCIceConnectionState;
    static COMPLETED: RTCIceConnectionState;
    static CONNECTED: RTCIceConnectionState;
    static DISCONNECTED: RTCIceConnectionState;
    static FAILED: RTCIceConnectionState;
    static NEW: RTCIceConnectionState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RTCIceConnectionState;
    static values(): (Object | null)[];
    private constructor()
    name(): "NEW" | "CHECKING" | "CONNECTED" | "COMPLETED" | "FAILED" | "DISCONNECTED" | "CLOSED";
}