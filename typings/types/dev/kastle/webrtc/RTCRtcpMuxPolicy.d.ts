import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCRtcpMuxPolicy extends Enum<RTCRtcpMuxPolicy> {
    static NEGOTIATE: RTCRtcpMuxPolicy;
    static REQUIRE: RTCRtcpMuxPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RTCRtcpMuxPolicy;
    static values(): RTCRtcpMuxPolicy[];
    private constructor()
    name(): "NEGOTIATE" | "REQUIRE";
}