import type { Socket } from '../../../../../java/net/Socket.d.ts'
import type { Principal } from '../../../../../java/security/Principal.d.ts'
import type { PrivateKey } from '../../../../../java/security/PrivateKey.d.ts'
import type { X509Certificate } from '../../../../../java/security/cert/X509Certificate.d.ts'
import type { SSLEngine } from '../../../../../javax/net/ssl/SSLEngine.d.ts'
import type { X509ExtendedKeyManager } from '../../../../../javax/net/ssl/X509ExtendedKeyManager.d.ts'
import type { X509KeyManager } from '../../../../../javax/net/ssl/X509KeyManager.d.ts'
export class X509KeyManagerWrapper extends X509ExtendedKeyManager {
    constructor(arg0: X509KeyManager)
    // private delegate: X509KeyManager;
    chooseClientAlias(arg0: string[], arg1: Principal[], arg2: Socket): string;
    chooseEngineClientAlias(arg0: string[], arg1: Principal[], arg2: SSLEngine): string;
    chooseEngineServerAlias(arg0: string, arg1: Principal[], arg2: SSLEngine): string;
    chooseServerAlias(arg0: string, arg1: Principal[], arg2: Socket): string;
    getCertificateChain(arg0: string): X509Certificate[];
    getClientAliases(arg0: string, arg1: Principal[]): string[];
    getPrivateKey(arg0: string): PrivateKey;
    getServerAliases(arg0: string, arg1: Principal[]): string[];
}