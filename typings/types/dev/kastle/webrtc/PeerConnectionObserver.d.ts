import type { RTCDataChannel } from '../../../dev/kastle/webrtc/RTCDataChannel.d.ts'
import type { RTCIceCandidate } from '../../../dev/kastle/webrtc/RTCIceCandidate.d.ts'
import type { RTCIceConnectionState } from '../../../dev/kastle/webrtc/RTCIceConnectionState.d.ts'
import type { RTCIceGatheringState } from '../../../dev/kastle/webrtc/RTCIceGatheringState.d.ts'
import type { RTCPeerConnectionIceErrorEvent } from '../../../dev/kastle/webrtc/RTCPeerConnectionIceErrorEvent.d.ts'
import type { RTCPeerConnectionState } from '../../../dev/kastle/webrtc/RTCPeerConnectionState.d.ts'
import type { RTCSignalingState } from '../../../dev/kastle/webrtc/RTCSignalingState.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PeerConnectionObserver extends Object{
    onConnectionChange(arg0: RTCPeerConnectionState): void;
    onDataChannel(arg0: RTCDataChannel): void;
    onIceCandidate(arg0: RTCIceCandidate): void;
    onIceCandidateError(arg0: RTCPeerConnectionIceErrorEvent): void;
    onIceCandidatesRemoved(arg0: RTCIceCandidate[]): void;
    onIceConnectionChange(arg0: RTCIceConnectionState): void;
    onIceConnectionReceivingChange(arg0: boolean): void;
    onIceGatheringChange(arg0: RTCIceGatheringState): void;
    onRenegotiationNeeded(): void;
    onSignalingChange(arg0: RTCSignalingState): void;
    onStandardizedIceConnectionChange(arg0: RTCIceConnectionState): void;
}