import type { KeyStore } from '../../../java/security/KeyStore.d.ts'
import type { KeyManager } from '../../../javax/net/ssl/KeyManager.d.ts'
import type { ManagerFactoryParameters } from '../../../javax/net/ssl/ManagerFactoryParameters.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class KeyManagerFactorySpi extends Object {
    constructor()
    engineGetKeyManagers(): KeyManager[];
    engineInit(arg0: KeyStore, arg1: string[]): void;
    engineInit(arg0: ManagerFactoryParameters): void;
}