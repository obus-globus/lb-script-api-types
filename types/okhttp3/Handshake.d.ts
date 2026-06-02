import type { Principal } from '../java/security/Principal.d.ts'
import type { Certificate } from '../java/security/cert/Certificate.d.ts'
import type { SSLSession } from '../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Function0 } from '../kotlin/jvm/functions/Function0.d.ts'
import type { CipherSuite } from '../okhttp3/CipherSuite.d.ts'
import type { Handshake$Companion } from '../okhttp3/Handshake$Companion.d.ts'
import type { TlsVersion } from '../okhttp3/TlsVersion.d.ts'
export class Handshake extends Object {
    static Companion: Handshake$Companion;
    static get(paramarg0: SSLSession): Handshake;
    static get(paramarg0: TlsVersion, paramarg1: CipherSuite, paramarg2: (Object | null)[], paramarg3: (Object | null)[]): Handshake;
    constructor(tlsVersion: TlsVersion, cipherSuite: CipherSuite, localCertificates: Certificate[], peerCertificatesFn: Function0<Certificate[]>)
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