import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KeyUsage extends Object {
    constructor(arg0: X509Certificate)
    // private is: (Object | null)[];
    isCRLSign(): boolean;
    isDataEncipherment(): boolean;
    isDecipherOnly(): boolean;
    isDigitalSignature(): boolean;
    isEncipherOnly(): boolean;
    isKeyAgreement(): boolean;
    isKeyCertSign(): boolean;
    isKeyEncipherment(): boolean;
    isNonRepudiation(): boolean;
}