import type { Object } from '../java/lang/Object.d.ts'
import type { CipherSuite } from '../okhttp3/CipherSuite.d.ts'
import type { ConnectionSpec } from '../okhttp3/ConnectionSpec.d.ts'
export class ConnectionSpec$Companion extends Object {
    // private APPROVED_CIPHER_SUITES: CipherSuite[];
    CLEARTEXT: ConnectionSpec;
    COMPATIBLE_TLS: ConnectionSpec;
    MODERN_TLS: ConnectionSpec;
    // private RESTRICTED_CIPHER_SUITES: CipherSuite[];
    RESTRICTED_TLS: ConnectionSpec;
}