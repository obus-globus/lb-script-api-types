import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCIceTransportPolicy extends Enum<RTCIceTransportPolicy> {
    static ALL: RTCIceTransportPolicy;
    static NONE: RTCIceTransportPolicy;
    static NO_HOST: RTCIceTransportPolicy;
    static RELAY: RTCIceTransportPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RTCIceTransportPolicy;
    static values(): RTCIceTransportPolicy[];
    private constructor()
    name(): "NONE" | "RELAY" | "NO_HOST" | "ALL";
}