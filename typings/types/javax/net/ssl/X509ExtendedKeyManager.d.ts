import type { Principal } from '../../../java/security/Principal.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { SSLEngine } from '../../../javax/net/ssl/SSLEngine.d.ts'
import type { X509KeyManager } from '../../../javax/net/ssl/X509KeyManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class X509ExtendedKeyManager extends Object implements X509KeyManager {
    constructor()
    chooseEngineClientAlias(arg0: string[], arg1: Principal[], arg2: SSLEngine): string;
    chooseEngineServerAlias(arg0: string, arg1: Principal[], arg2: SSLEngine): string;
    getPrivateKey(arg0: string): PrivateKey;
}