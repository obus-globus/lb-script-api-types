import type { JavaMap } from '../../../JavaMap.d.ts'
import type { RTCStatsType } from '../../../dev/kastle/webrtc/RTCStatsType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RTCStats extends Object {
    constructor(arg0: number, arg1: RTCStatsType, arg2: string, arg3: JavaMap<string, Object>)
    readonly attributes: JavaMap<string, Object>;
    readonly id: string;
    readonly timestamp: number;
    readonly type: RTCStatsType;
    getAttributes(): JavaMap<string, Object>;
    getId(): string;
    getTimestamp(): number;
    getType(): RTCStatsType;
    toString(): string;
}