import type { OpenSslKeyMaterialProvider } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterialProvider.d.ts'
import type { OpenSslX509KeyManagerFactory$OpenSslKeyManagerFactorySpi$ProviderFactory } from '../../../../io/netty/handler/ssl/OpenSslX509KeyManagerFactory$OpenSslKeyManagerFactorySpi$ProviderFactory.d.ts'
import type { KeyStore } from '../../../../java/security/KeyStore.d.ts'
import type { KeyManager } from '../../../../javax/net/ssl/KeyManager.d.ts'
import type { KeyManagerFactory } from '../../../../javax/net/ssl/KeyManagerFactory.d.ts'
import type { KeyManagerFactorySpi } from '../../../../javax/net/ssl/KeyManagerFactorySpi.d.ts'
import type { ManagerFactoryParameters } from '../../../../javax/net/ssl/ManagerFactoryParameters.d.ts'
export class OpenSslX509KeyManagerFactory$OpenSslKeyManagerFactorySpi extends KeyManagerFactorySpi {
    constructor(arg0: KeyManagerFactory)
    // private kmf: KeyManagerFactory;
    // private providerFactory: OpenSslX509KeyManagerFactory$OpenSslKeyManagerFactorySpi$ProviderFactory;
    engineGetKeyManagers(): KeyManager[];
    engineInit(arg0: KeyStore, arg1: string[]): void;
    engineInit(arg0: ManagerFactoryParameters): void;
    newProvider(): OpenSslKeyMaterialProvider;
}