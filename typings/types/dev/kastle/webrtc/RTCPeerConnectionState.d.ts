import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCPeerConnectionState extends Enum<RTCPeerConnectionState> {
    static CLOSED: RTCPeerConnectionState;
    static CONNECTED: RTCPeerConnectionState;
    static CONNECTING: RTCPeerConnectionState;
    static DISCONNECTED: RTCPeerConnectionState;
    static FAILED: RTCPeerConnectionState;
    static NEW: RTCPeerConnectionState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RTCPeerConnectionState;
    static values(): RTCPeerConnectionState[];
    private constructor()
    name(): "NEW" | "CONNECTING" | "CONNECTED" | "DISCONNECTED" | "FAILED" | "CLOSED";
}