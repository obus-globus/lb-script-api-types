import type { KeyStore } from '../../../java/security/KeyStore.d.ts'
import type { ManagerFactoryParameters } from '../../../javax/net/ssl/ManagerFactoryParameters.d.ts'
import type { TrustManager } from '../../../javax/net/ssl/TrustManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class TrustManagerFactorySpi extends Object {
    constructor()
    engineGetTrustManagers(): TrustManager[];
    engineInit(arg0: KeyStore): void;
    engineInit(arg0: ManagerFactoryParameters): void;
}