import type { RTCSdpType } from '../../../dev/kastle/webrtc/RTCSdpType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RTCSessionDescription extends Object {
    constructor(arg0: RTCSdpType, arg1: string)
    sdp: string;
    sdpType: RTCSdpType;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}