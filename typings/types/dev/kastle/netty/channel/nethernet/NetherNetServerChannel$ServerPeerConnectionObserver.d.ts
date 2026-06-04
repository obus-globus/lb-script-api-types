import type { NetherNetChildChannel } from '../../../../../dev/kastle/netty/channel/nethernet/NetherNetChildChannel.d.ts'
import type { PeerConnectionObserver } from '../../../../../dev/kastle/webrtc/PeerConnectionObserver.d.ts'
import type { RTCDataChannel } from '../../../../../dev/kastle/webrtc/RTCDataChannel.d.ts'
import type { RTCIceCandidate } from '../../../../../dev/kastle/webrtc/RTCIceCandidate.d.ts'
import type { RTCIceConnectionState } from '../../../../../dev/kastle/webrtc/RTCIceConnectionState.d.ts'
import type { RTCIceGatheringState } from '../../../../../dev/kastle/webrtc/RTCIceGatheringState.d.ts'
import type { RTCPeerConnectionIceErrorEvent } from '../../../../../dev/kastle/webrtc/RTCPeerConnectionIceErrorEvent.d.ts'
import type { RTCPeerConnectionState } from '../../../../../dev/kastle/webrtc/RTCPeerConnectionState.d.ts'
import type { RTCSignalingState } from '../../../../../dev/kastle/webrtc/RTCSignalingState.d.ts'
import type { ScheduledFuture } from '../../../../../io/netty/util/concurrent/ScheduledFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NetherNetServerChannel$ServerPeerConnectionObserver extends Object implements PeerConnectionObserver {
    constructor(null_: NetherNetServerChannel$ServerPeerConnectionObserver, arg1: number, arg2: string)
    // private child: NetherNetChildChannel;
    // private connectionId: number;
    readonly handshakeTimeout: ScheduledFuture<Object>;
    // private reliable: RTCDataChannel;
    // private remoteNetworkId: string;
    // private unreliable: RTCDataChannel;
    // private checkDataChannels(): void;
    // private extractCandidateType(arg0: string): string;
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
    setChildChannel(arg0: NetherNetChildChannel): void;
    setHandshakeTimeout(arg0: ScheduledFuture<Object>): void;
}