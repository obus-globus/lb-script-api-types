import type { RTCDataChannelBuffer } from '../../../dev/kastle/webrtc/RTCDataChannelBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RTCDataChannelObserver extends Object{
    onBufferedAmountChange(arg0: number): void;
    onMessage(arg0: RTCDataChannelBuffer): void;
    onStateChange(): void;
}