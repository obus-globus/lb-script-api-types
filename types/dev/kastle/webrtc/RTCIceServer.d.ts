import type { TlsCertPolicy } from '../../../dev/kastle/webrtc/TlsCertPolicy.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RTCIceServer extends Object {
    constructor()
    hostname: string;
    password: string;
    tlsAlpnProtocols: string[];
    tlsCertPolicy: TlsCertPolicy;
    tlsEllipticCurves: string[];
    urls: string[];
    username: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}