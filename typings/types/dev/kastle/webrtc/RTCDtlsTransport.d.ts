import type { RTCCertificatePEM } from '../../../dev/kastle/webrtc/RTCCertificatePEM.d.ts'
import type { RTCDtlsTransportObserver } from '../../../dev/kastle/webrtc/RTCDtlsTransportObserver.d.ts'
import type { RTCDtlsTransportState } from '../../../dev/kastle/webrtc/RTCDtlsTransportState.d.ts'
import type { RTCIceTransport } from '../../../dev/kastle/webrtc/RTCIceTransport.d.ts'
import type { NativeObject } from '../../../dev/kastle/webrtc/internal/NativeObject.d.ts'
export class RTCDtlsTransport extends NativeObject {
    constructor()
    getIceTransport(): RTCIceTransport;
    getRemoteCertificates(): RTCCertificatePEM[];
    getState(): RTCDtlsTransportState;
    registerObserver(arg0: RTCDtlsTransportObserver): void;
    unregisterObserver(): void;
}