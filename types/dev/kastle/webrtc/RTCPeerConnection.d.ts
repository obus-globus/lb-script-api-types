import type { CreateSessionDescriptionObserver } from '../../../dev/kastle/webrtc/CreateSessionDescriptionObserver.d.ts'
import type { RTCAnswerOptions } from '../../../dev/kastle/webrtc/RTCAnswerOptions.d.ts'
import type { RTCConfiguration } from '../../../dev/kastle/webrtc/RTCConfiguration.d.ts'
import type { RTCDataChannel } from '../../../dev/kastle/webrtc/RTCDataChannel.d.ts'
import type { RTCDataChannelInit } from '../../../dev/kastle/webrtc/RTCDataChannelInit.d.ts'
import type { RTCIceCandidate } from '../../../dev/kastle/webrtc/RTCIceCandidate.d.ts'
import type { RTCIceConnectionState } from '../../../dev/kastle/webrtc/RTCIceConnectionState.d.ts'
import type { RTCIceGatheringState } from '../../../dev/kastle/webrtc/RTCIceGatheringState.d.ts'
import type { RTCOfferOptions } from '../../../dev/kastle/webrtc/RTCOfferOptions.d.ts'
import type { RTCPeerConnectionState } from '../../../dev/kastle/webrtc/RTCPeerConnectionState.d.ts'
import type { RTCSessionDescription } from '../../../dev/kastle/webrtc/RTCSessionDescription.d.ts'
import type { RTCSignalingState } from '../../../dev/kastle/webrtc/RTCSignalingState.d.ts'
import type { RTCStatsCollectorCallback } from '../../../dev/kastle/webrtc/RTCStatsCollectorCallback.d.ts'
import type { SetSessionDescriptionObserver } from '../../../dev/kastle/webrtc/SetSessionDescriptionObserver.d.ts'
import type { NativeObject } from '../../../dev/kastle/webrtc/internal/NativeObject.d.ts'
export class RTCPeerConnection extends NativeObject {
    private constructor()
    // private observerHandle: number;
    addIceCandidate(arg0: RTCIceCandidate): void;
    close(): void;
    createAnswer(arg0: RTCAnswerOptions, arg1: CreateSessionDescriptionObserver): void;
    createDataChannel(arg0: string, arg1: RTCDataChannelInit): RTCDataChannel;
    createOffer(arg0: RTCOfferOptions, arg1: CreateSessionDescriptionObserver): void;
    getConfiguration(): RTCConfiguration;
    getConnectionState(): RTCPeerConnectionState;
    getCurrentLocalDescription(): RTCSessionDescription;
    getCurrentRemoteDescription(): RTCSessionDescription;
    getIceConnectionState(): RTCIceConnectionState;
    getIceGatheringState(): RTCIceGatheringState;
    getLocalDescription(): RTCSessionDescription;
    getPendingLocalDescription(): RTCSessionDescription;
    getPendingRemoteDescription(): RTCSessionDescription;
    getRemoteDescription(): RTCSessionDescription;
    getSignalingState(): RTCSignalingState;
    getStats(arg0: RTCStatsCollectorCallback): void;
    removeIceCandidates(arg0: RTCIceCandidate[]): void;
    restartIce(): void;
    setConfiguration(arg0: RTCConfiguration): void;
    setLocalDescription(arg0: RTCSessionDescription, arg1: SetSessionDescriptionObserver): void;
    setRemoteDescription(arg0: RTCSessionDescription, arg1: SetSessionDescriptionObserver): void;
}