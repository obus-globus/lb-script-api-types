import type { SSLSocket } from '../javax/net/ssl/SSLSocket.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { CipherSuite } from '../okhttp3/CipherSuite.d.ts'
import type { ConnectionSpec$Companion } from '../okhttp3/ConnectionSpec$Companion.d.ts'
import type { TlsVersion } from '../okhttp3/TlsVersion.d.ts'
export class ConnectionSpec extends Object {
    static CLEARTEXT: ConnectionSpec;
    static COMPATIBLE_TLS: ConnectionSpec;
    static Companion: ConnectionSpec$Companion;
    static MODERN_TLS: ConnectionSpec;
    static RESTRICTED_TLS: ConnectionSpec;
    constructor(isTls: boolean, supportsTlsExtensions: boolean, cipherSuitesAsString: string[] | null, tlsVersionsAsString: string[] | null)
    cipherSuites(): CipherSuite[] | null;
    // private cipherSuitesAsString: string[] | null;
    /*not mapped: */ getCipherSuitesAsString$okhttp(): string[] | null;
    // private isTls: boolean;
    /*not mapped: */ isTls(): boolean;
    // private supportsTlsExtensions: boolean;
    supportsTlsExtensions(): boolean;
    tlsVersions(): TlsVersion[] | null;
    // private tlsVersionsAsString: string[] | null;
    apply(sslSocket: SSLSocket, isFallback: boolean): void;
    cipherSuites(): CipherSuite[] | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isCompatible(socket: SSLSocket): boolean;
    // private supportedSpec(sslSocket: SSLSocket, isFallback: boolean): ConnectionSpec;
    supportsTlsExtensions(): boolean;
    tlsVersions(): TlsVersion[] | null;
    toString(): string;
}