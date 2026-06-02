import type { RTCStatsType } from '../../../dev/kastle/webrtc/RTCStatsType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RTCStats extends Object {
    constructor(arg0: number, arg1: RTCStatsType, arg2: string, arg3: { [key: string]: Object })
    readonly attributes: { [key: string]: Object };
    readonly id: string;
    readonly timestamp: number;
    readonly type: RTCStatsType;
    getAttributes(): { [key: string]: Object };
    getId(): string;
    getTimestamp(): number;
    getType(): RTCStatsType;
    toString(): string;
}