import type { KeyStore } from '../../../../../java/security/KeyStore.d.ts'
import type { KeyManager } from '../../../../../javax/net/ssl/KeyManager.d.ts'
import type { KeyManagerFactory } from '../../../../../javax/net/ssl/KeyManagerFactory.d.ts'
import type { ManagerFactoryParameters } from '../../../../../javax/net/ssl/ManagerFactoryParameters.d.ts'
export abstract class SimpleKeyManagerFactory extends KeyManagerFactory {
    static getDefaultAlgorithm(): string;
    static getInstance(paramarg0: string): KeyManagerFactory;
    static getInstance(paramarg0: string, paramarg1: string): KeyManagerFactory;
    static getInstance(paramarg0: string, paramarg1: Provider): KeyManagerFactory;
    constructor()
    constructor(arg0: string)
    engineGetKeyManagers(): KeyManager[];
    engineInit(arg0: KeyStore, arg1: string[]): void;
    engineInit(arg0: ManagerFactoryParameters): void;
}