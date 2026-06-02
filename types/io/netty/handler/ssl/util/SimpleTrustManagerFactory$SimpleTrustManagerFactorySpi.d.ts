import type { SimpleTrustManagerFactory } from '../../../../../io/netty/handler/ssl/util/SimpleTrustManagerFactory.d.ts'
import type { KeyStore } from '../../../../../java/security/KeyStore.d.ts'
import type { ManagerFactoryParameters } from '../../../../../javax/net/ssl/ManagerFactoryParameters.d.ts'
import type { TrustManager } from '../../../../../javax/net/ssl/TrustManager.d.ts'
import type { TrustManagerFactorySpi } from '../../../../../javax/net/ssl/TrustManagerFactorySpi.d.ts'
export class SimpleTrustManagerFactory$SimpleTrustManagerFactorySpi extends TrustManagerFactorySpi {
    constructor()
    // private parent: SimpleTrustManagerFactory;
    // private trustManagers: TrustManager[];
    engineGetTrustManagers(): TrustManager[];
    engineInit(arg0: KeyStore): void;
    engineInit(arg0: ManagerFactoryParameters): void;
    init(arg0: SimpleTrustManagerFactory): void;
}