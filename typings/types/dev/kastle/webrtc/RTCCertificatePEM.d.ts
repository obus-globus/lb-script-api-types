import type { Object } from '../../../java/lang/Object.d.ts'
export class RTCCertificatePEM extends Object {
    constructor(arg0: string, arg1: string, arg2: number)
    readonly certificate: string;
    readonly expires: number;
    readonly privateKey: string;
    getCertificate(): string;
    getExpires(): number;
    getPrivateKey(): string;
}