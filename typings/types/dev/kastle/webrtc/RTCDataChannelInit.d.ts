import type { RTCPriorityType } from '../../../dev/kastle/webrtc/RTCPriorityType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RTCDataChannelInit extends Object {
    constructor()
    id: number;
    maxPacketLifeTime: number;
    maxRetransmits: number;
    negotiated: boolean;
    ordered: boolean;
    priority: RTCPriorityType;
    protocol: string;
}