import type { JavaMap } from '../../../JavaMap.d.ts'
import type { RTCStats } from '../../../dev/kastle/webrtc/RTCStats.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RTCStatsReport extends Object {
    constructor(arg0: JavaMap<string, RTCStats>, arg1: number)
    readonly stats: JavaMap<string, RTCStats>;
    readonly timestamp: number;
    getStats(): JavaMap<string, RTCStats>;
    getTimestamp(): number;
    toString(): string;
}