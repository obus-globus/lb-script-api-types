import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCIceTransportPolicy extends Enum<RTCIceTransportPolicy> {
    static ALL: RTCIceTransportPolicy;
    static NONE: RTCIceTransportPolicy;
    static NO_HOST: RTCIceTransportPolicy;
    static RELAY: RTCIceTransportPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RTCIceTransportPolicy;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "RELAY" | "NO_HOST" | "ALL";
}