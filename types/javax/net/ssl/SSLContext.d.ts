import type { SecureRandom } from '../../../java/security/SecureRandom.d.ts'
import type { KeyManager } from '../../../javax/net/ssl/KeyManager.d.ts'
import type { SSLContextSpi } from '../../../javax/net/ssl/SSLContextSpi.d.ts'
import type { SSLEngine } from '../../../javax/net/ssl/SSLEngine.d.ts'
import type { SSLParameters } from '../../../javax/net/ssl/SSLParameters.d.ts'
import type { SSLServerSocketFactory } from '../../../javax/net/ssl/SSLServerSocketFactory.d.ts'
import type { SSLSessionContext } from '../../../javax/net/ssl/SSLSessionContext.d.ts'
import type { SSLSocketFactory } from '../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { TrustManager } from '../../../javax/net/ssl/TrustManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SSLContext extends Object {
    static getDefault(): SSLContext;
    static getInstance(paramarg0: string): SSLContext;
    static getInstance(paramarg0: string, paramarg1: string): SSLContext;
    static getInstance(paramarg0: string, paramarg1: Provider): SSLContext;
    static setDefault(paramarg0: SSLContext): void;
    constructor(arg0: SSLContextSpi, arg1: Provider, arg2: string)
    // private contextSpi: SSLContextSpi;
    readonly protocol: string;
    readonly provider: Provider;
    createSSLEngine(): SSLEngine;
    createSSLEngine(arg0: string, arg1: number): SSLEngine;
    getClientSessionContext(): SSLSessionContext;
    getDefaultSSLParameters(): SSLParameters;
    getProtocol(): string;
    getProvider(): Provider;
    getServerSessionContext(): SSLSessionContext;
    getServerSocketFactory(): SSLServerSocketFactory;
    getSocketFactory(): SSLSocketFactory;
    getSupportedSSLParameters(): SSLParameters;
    init(arg0: KeyManager[], arg1: TrustManager[], arg2: SecureRandom): void;
}