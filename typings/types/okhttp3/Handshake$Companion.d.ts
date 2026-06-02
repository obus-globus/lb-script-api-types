import type { Certificate } from '../java/security/cert/Certificate.d.ts'
import type { SSLSession } from '../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { CipherSuite } from '../okhttp3/CipherSuite.d.ts'
import type { Handshake } from '../okhttp3/Handshake.d.ts'
import type { TlsVersion } from '../okhttp3/TlsVersion.d.ts'
export class Handshake$Companion extends Object {
    get(sslSession: SSLSession): Handshake;
    get(tlsVersion: TlsVersion, cipherSuite: CipherSuite, peerCertificates: Certificate[], localCertificates: Certificate[]): Handshake;
}