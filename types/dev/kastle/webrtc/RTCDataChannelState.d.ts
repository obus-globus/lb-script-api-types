import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCDataChannelState extends Enum<RTCDataChannelState> {
    static CLOSED: RTCDataChannelState;
    static CLOSING: RTCDataChannelState;
    static CONNECTING: RTCDataChannelState;
    static OPEN: RTCDataChannelState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RTCDataChannelState;
    static values(): (Object | null)[];
    private constructor()
    name(): "CONNECTING" | "OPEN" | "CLOSING" | "CLOSED";
}