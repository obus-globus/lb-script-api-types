import type { SelfSignedCertificate } from '../../../../../io/netty/handler/ssl/util/SelfSignedCertificate.d.ts'
import type { KeyPair } from '../../../../../java/security/KeyPair.d.ts'
import type { PrivateKey } from '../../../../../java/security/PrivateKey.d.ts'
import type { SecureRandom } from '../../../../../java/security/SecureRandom.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class SelfSignedCertificate$Builder extends Object {
    constructor(arg0: any)
    // private algorithm: string;
    // private bits: number;
    // private failure: Throwable;
    // private fqdn: string;
    // private keypair: KeyPair;
    // private notAfter: Date;
    // private notBefore: Date;
    // private paths: string[];
    // private privateKey: PrivateKey;
    // private random: SecureRandom;
    // private addFailure(arg0: Throwable): void;
    algorithm(arg0: string): SelfSignedCertificate$Builder;
    bits(arg0: number): SelfSignedCertificate$Builder;
    build(): SelfSignedCertificate;
    fqdn(arg0: string): SelfSignedCertificate$Builder;
    generateBc(): boolean;
    generateCertificateBuilder(): boolean;
    // private generateKeyPairLocally(): void;
    generateKeytool(): boolean;
    generateSunMiscSecurity(): boolean;
    notAfter(arg0: Date): SelfSignedCertificate$Builder;
    notBefore(arg0: Date): SelfSignedCertificate$Builder;
    random(arg0: SecureRandom): SelfSignedCertificate$Builder;
    // private randomOrDefault(): SecureRandom;
}