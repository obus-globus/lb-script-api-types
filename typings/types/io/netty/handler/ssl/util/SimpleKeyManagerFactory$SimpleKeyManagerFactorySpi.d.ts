import type { SimpleKeyManagerFactory } from '../../../../../io/netty/handler/ssl/util/SimpleKeyManagerFactory.d.ts'
import type { KeyStore } from '../../../../../java/security/KeyStore.d.ts'
import type { KeyManager } from '../../../../../javax/net/ssl/KeyManager.d.ts'
import type { KeyManagerFactorySpi } from '../../../../../javax/net/ssl/KeyManagerFactorySpi.d.ts'
import type { ManagerFactoryParameters } from '../../../../../javax/net/ssl/ManagerFactoryParameters.d.ts'
export class SimpleKeyManagerFactory$SimpleKeyManagerFactorySpi extends KeyManagerFactorySpi {
    private constructor()
    constructor(arg0: { [key: string]: any })
    // private keyManagers: KeyManager[];
    // private parent: SimpleKeyManagerFactory;
    engineGetKeyManagers(): KeyManager[];
    engineInit(arg0: KeyStore, arg1: string[]): void;
    engineInit(arg0: ManagerFactoryParameters): void;
    init(arg0: SimpleKeyManagerFactory): void;
}