import type { RTCStatsReport } from '../../../dev/kastle/webrtc/RTCStatsReport.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RTCStatsCollectorCallback extends Object{
    onStatsDelivered(arg0: RTCStatsReport): void;
}