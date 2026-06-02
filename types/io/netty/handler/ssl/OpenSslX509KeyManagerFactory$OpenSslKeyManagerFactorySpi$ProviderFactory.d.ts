import type { OpenSslKeyMaterialProvider } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterialProvider.d.ts'
import type { X509KeyManager } from '../../../../javax/net/ssl/X509KeyManager.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslX509KeyManagerFactory$OpenSslKeyManagerFactorySpi$ProviderFactory extends Object {
    constructor(arg0: X509KeyManager, arg1: string, arg2: string[])
    // private aliases: string[];
    // private keyManager: X509KeyManager;
    // private password: string;
    newProvider(): OpenSslKeyMaterialProvider;
}