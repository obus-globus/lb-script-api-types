import type { KeyStore } from '../../../../../java/security/KeyStore.d.ts'
import type { ManagerFactoryParameters } from '../../../../../javax/net/ssl/ManagerFactoryParameters.d.ts'
import type { TrustManager } from '../../../../../javax/net/ssl/TrustManager.d.ts'
import type { TrustManagerFactory } from '../../../../../javax/net/ssl/TrustManagerFactory.d.ts'
export abstract class SimpleTrustManagerFactory extends TrustManagerFactory {
    static getDefaultAlgorithm(): string;
    static getInstance(paramarg0: string): TrustManagerFactory;
    static getInstance(paramarg0: string, paramarg1: string): TrustManagerFactory;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: any }): TrustManagerFactory;
    constructor()
    constructor(arg0: string)
    engineGetTrustManagers(): TrustManager[];
    engineInit(arg0: KeyStore): void;
    engineInit(arg0: ManagerFactoryParameters): void;
}