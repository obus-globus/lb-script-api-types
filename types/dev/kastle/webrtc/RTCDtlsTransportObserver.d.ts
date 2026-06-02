import type { RTCDtlsTransportState } from '../../../dev/kastle/webrtc/RTCDtlsTransportState.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RTCDtlsTransportObserver extends Object{
    onError(arg0: string): void;
    onStateChange(arg0: RTCDtlsTransportState): void;
}