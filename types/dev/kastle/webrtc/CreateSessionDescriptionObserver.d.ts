import type { RTCSessionDescription } from '../../../dev/kastle/webrtc/RTCSessionDescription.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CreateSessionDescriptionObserver extends Object{
    onFailure(arg0: string): void;
    onSuccess(arg0: RTCSessionDescription): void;
}