import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCDtlsTransportState extends Enum<RTCDtlsTransportState> {
    static CLOSED: RTCDtlsTransportState;
    static CONNECTED: RTCDtlsTransportState;
    static CONNECTING: RTCDtlsTransportState;
    static FAILED: RTCDtlsTransportState;
    static NEW: RTCDtlsTransportState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RTCDtlsTransportState;
    static values(): RTCDtlsTransportState[];
    private constructor()
    name(): "NEW" | "CONNECTING" | "CONNECTED" | "CLOSED" | "FAILED";
}