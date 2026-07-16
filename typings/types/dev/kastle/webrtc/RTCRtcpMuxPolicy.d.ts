import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCRtcpMuxPolicy extends Enum<RTCRtcpMuxPolicy> {
    static NEGOTIATE: RTCRtcpMuxPolicy;
    static REQUIRE: RTCRtcpMuxPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RTCRtcpMuxPolicy;
    static values(): RTCRtcpMuxPolicy[];
    private constructor()
    name(): "NEGOTIATE" | "REQUIRE";
}