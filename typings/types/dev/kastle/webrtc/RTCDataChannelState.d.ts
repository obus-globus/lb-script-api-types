import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCDataChannelState extends Enum<RTCDataChannelState> {
    static CLOSED: RTCDataChannelState;
    static CLOSING: RTCDataChannelState;
    static CONNECTING: RTCDataChannelState;
    static OPEN: RTCDataChannelState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RTCDataChannelState;
    static values(): RTCDataChannelState[];
    private constructor()
    name(): "CONNECTING" | "OPEN" | "CLOSING" | "CLOSED";
}