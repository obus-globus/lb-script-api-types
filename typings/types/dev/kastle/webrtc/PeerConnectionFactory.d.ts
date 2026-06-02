import type { PeerConnectionObserver } from '../../../dev/kastle/webrtc/PeerConnectionObserver.d.ts'
import type { RTCConfiguration } from '../../../dev/kastle/webrtc/RTCConfiguration.d.ts'
import type { RTCPeerConnection } from '../../../dev/kastle/webrtc/RTCPeerConnection.d.ts'
import type { DisposableNativeObject } from '../../../dev/kastle/webrtc/internal/DisposableNativeObject.d.ts'
export class PeerConnectionFactory extends DisposableNativeObject {
    constructor()
    // private networkThreadHandle: number;
    // private signalingThreadHandle: number;
    // private workerThreadHandle: number;
    createPeerConnection(arg0: RTCConfiguration, arg1: PeerConnectionObserver): RTCPeerConnection;
    dispose(): void;
    // private initialize(): void;
}