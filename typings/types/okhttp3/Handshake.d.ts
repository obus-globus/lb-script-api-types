import type { Principal } from '../java/security/Principal.d.ts'
import type { Certificate } from '../java/security/cert/Certificate.d.ts'
import type { SSLSession } from '../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { CipherSuite } from '../okhttp3/CipherSuite.d.ts'
import type { Handshake$Companion } from '../okhttp3/Handshake$Companion.d.ts'
import type { TlsVersion } from '../okhttp3/TlsVersion.d.ts'
export class Handshake extends Object {
    static Companion: Handshake$Companion;
    static get(self: SSLSession): Handshake;
    static get(tlsVersion: TlsVersion, cipherSuite: CipherSuite, peerCertificates: Certificate[], localCertificates: Certificate[]): Handshake;
    constructor(tlsVersion: TlsVersion, cipherSuite: CipherSuite, localCertificates: Certificate[], peerCertificatesFn: () => Certificate[])
    // private cipherSuite: CipherSuite;
    cipherSuite(): CipherSuite;
    // private localCertificates: Certificate[];
    localCertificates(): Certificate[];
    localPrincipal(): Principal | null;
    // private peerCertificates: Certificate[];
    peerCertificates(): Certificate[];
    peerPrincipal(): Principal | null;
    // private tlsVersion: TlsVersion;
    tlsVersion(): TlsVersion;
    cipherSuite(): CipherSuite;
    equals(other: Object | null): boolean;
    hashCode(): number;
    localCertificates(): Certificate[];
    localPrincipal(): Principal | null;
    peerCertificates(): Certificate[];
    peerPrincipal(): Principal | null;
    tlsVersion(): TlsVersion;
    toString(): string;
}