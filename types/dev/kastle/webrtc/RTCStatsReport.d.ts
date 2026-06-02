import type { RTCStats } from '../../../dev/kastle/webrtc/RTCStats.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RTCStatsReport extends Object {
    constructor(arg0: { [key: string]: RTCStats }, arg1: number)
    readonly stats: { [key: string]: RTCStats };
    readonly timestamp: number;
    getStats(): { [key: string]: RTCStats };
    getTimestamp(): number;
    toString(): string;
}