import type { SecureRandom } from '../../../java/security/SecureRandom.d.ts'
import type { KeyManager } from '../../../javax/net/ssl/KeyManager.d.ts'
import type { SSLEngine } from '../../../javax/net/ssl/SSLEngine.d.ts'
import type { SSLParameters } from '../../../javax/net/ssl/SSLParameters.d.ts'
import type { SSLServerSocketFactory } from '../../../javax/net/ssl/SSLServerSocketFactory.d.ts'
import type { SSLSessionContext } from '../../../javax/net/ssl/SSLSessionContext.d.ts'
import type { SSLSocket } from '../../../javax/net/ssl/SSLSocket.d.ts'
import type { SSLSocketFactory } from '../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { TrustManager } from '../../../javax/net/ssl/TrustManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class SSLContextSpi extends Object {
    constructor()
    engineCreateSSLEngine(): SSLEngine;
    engineCreateSSLEngine(arg0: string, arg1: number): SSLEngine;
    engineGetClientSessionContext(): SSLSessionContext;
    engineGetDefaultSSLParameters(): SSLParameters;
    engineGetServerSessionContext(): SSLSessionContext;
    engineGetServerSocketFactory(): SSLServerSocketFactory;
    engineGetSocketFactory(): SSLSocketFactory;
    engineGetSupportedSSLParameters(): SSLParameters;
    engineInit(arg0: KeyManager[], arg1: TrustManager[], arg2: SecureRandom): void;
    // private getDefaultSocket(): SSLSocket;
}