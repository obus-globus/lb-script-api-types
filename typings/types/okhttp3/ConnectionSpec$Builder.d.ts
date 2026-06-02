import type { Object } from '../java/lang/Object.d.ts'
import type { CipherSuite } from '../okhttp3/CipherSuite.d.ts'
import type { ConnectionSpec } from '../okhttp3/ConnectionSpec.d.ts'
import type { TlsVersion } from '../okhttp3/TlsVersion.d.ts'
export class ConnectionSpec$Builder extends Object {
    constructor(tls: boolean)
    constructor(connectionSpec: ConnectionSpec)
    // private cipherSuites: string[] | null;
    /*not mapped: */ getCipherSuites$okhttp(): string[] | null;
    // private supportsTlsExtensions: boolean;
    /*not mapped: */ getSupportsTlsExtensions$okhttp(): boolean;
    // private tls: boolean;
    /*not mapped: */ getTls$okhttp(): boolean;
    // private tlsVersions: string[] | null;
    /*not mapped: */ getTlsVersions$okhttp(): string[] | null;
    allEnabledCipherSuites(): ConnectionSpec$Builder;
    allEnabledTlsVersions(): ConnectionSpec$Builder;
    build(): ConnectionSpec;
    cipherSuites(cipherSuites: string[]): ConnectionSpec$Builder;
    cipherSuites(cipherSuites: CipherSuite[]): ConnectionSpec$Builder;
    supportsTlsExtensions(supportsTlsExtensions: boolean): ConnectionSpec$Builder;
    tlsVersions(tlsVersions: string[]): ConnectionSpec$Builder;
    tlsVersions(tlsVersions: TlsVersion[]): ConnectionSpec$Builder;
}