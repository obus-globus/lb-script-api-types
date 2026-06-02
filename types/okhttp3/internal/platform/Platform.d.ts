import type { InetSocketAddress } from '../../../java/net/InetSocketAddress.d.ts'
import type { Socket } from '../../../java/net/Socket.d.ts'
import type { SSLContext } from '../../../javax/net/ssl/SSLContext.d.ts'
import type { SSLSocket } from '../../../javax/net/ssl/SSLSocket.d.ts'
import type { SSLSocketFactory } from '../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { X509TrustManager } from '../../../javax/net/ssl/X509TrustManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Protocol } from '../../../okhttp3/Protocol.d.ts'
import type { Platform$Companion } from '../../../okhttp3/internal/platform/Platform$Companion.d.ts'
import type { CertificateChainCleaner } from '../../../okhttp3/internal/tls/CertificateChainCleaner.d.ts'
import type { TrustRootIndex } from '../../../okhttp3/internal/tls/TrustRootIndex.d.ts'
export class Platform extends Object {
    static Companion: Platform$Companion;
    static INFO: number;
    static WARN: number;
    static get(): Platform;
    constructor()
    afterHandshake(sslSocket: SSLSocket): void;
    buildCertificateChainCleaner(trustManager: X509TrustManager): CertificateChainCleaner;
    buildTrustRootIndex(trustManager: X509TrustManager): TrustRootIndex;
    configureTlsExtensions(sslSocket: SSLSocket, hostname: string | null, protocols: Protocol[]): void;
    connectSocket(socket: Socket, address: InetSocketAddress, connectTimeout: number): void;
    getHandshakeServerNames(sslSocket: SSLSocket): string[];
    getPrefix(): string;
    getSelectedProtocol(sslSocket: SSLSocket): string | null;
    getStackTraceForCloseable(closer: string): Object | null;
    isCleartextTrafficPermitted(hostname: string): boolean;
    log(message: string, level: number, t: Throwable | null): void;
    logCloseableLeak(message: string, stackTrace: Object | null): void;
    newSSLContext(): SSLContext;
    newSslSocketFactory(trustManager: X509TrustManager): SSLSocketFactory;
    platformTrustManager(): X509TrustManager;
    toString(): string;
    trustManager(sslSocketFactory: SSLSocketFactory): X509TrustManager | null;
}