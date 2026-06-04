import type { FingerprintTrustManagerFactory } from '../../../../../io/netty/handler/ssl/util/FingerprintTrustManagerFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class FingerprintTrustManagerFactoryBuilder extends Object {
    constructor(arg0: string)
    // private algorithm: string;
    // private fingerprints: string[];
    build(): FingerprintTrustManagerFactory;
    fingerprints(arg0: CharSequence[]): FingerprintTrustManagerFactoryBuilder;
}