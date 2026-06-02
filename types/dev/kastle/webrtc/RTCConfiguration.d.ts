import type { PortAllocatorConfig } from '../../../dev/kastle/webrtc/PortAllocatorConfig.d.ts'
import type { RTCBundlePolicy } from '../../../dev/kastle/webrtc/RTCBundlePolicy.d.ts'
import type { RTCCertificatePEM } from '../../../dev/kastle/webrtc/RTCCertificatePEM.d.ts'
import type { RTCIceServer } from '../../../dev/kastle/webrtc/RTCIceServer.d.ts'
import type { RTCIceTransportPolicy } from '../../../dev/kastle/webrtc/RTCIceTransportPolicy.d.ts'
import type { RTCRtcpMuxPolicy } from '../../../dev/kastle/webrtc/RTCRtcpMuxPolicy.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RTCConfiguration extends Object {
    constructor()
    bundlePolicy: RTCBundlePolicy;
    certificates: RTCCertificatePEM[];
    iceServers: RTCIceServer[];
    iceTransportPolicy: RTCIceTransportPolicy;
    portAllocatorConfig: PortAllocatorConfig;
    rtcpMuxPolicy: RTCRtcpMuxPolicy;
}