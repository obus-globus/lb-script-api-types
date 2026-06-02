import type { SimpleTrustManagerFactory } from '../../../../../io/netty/handler/ssl/util/SimpleTrustManagerFactory.d.ts'
import type { KeyStore } from '../../../../../java/security/KeyStore.d.ts'
import type { ManagerFactoryParameters } from '../../../../../javax/net/ssl/ManagerFactoryParameters.d.ts'
import type { TrustManager } from '../../../../../javax/net/ssl/TrustManager.d.ts'
import type { TrustManagerFactory } from '../../../../../javax/net/ssl/TrustManagerFactory.d.ts'
export class InsecureTrustManagerFactory extends SimpleTrustManagerFactory {
    static INSTANCE: TrustManagerFactory;
    static getDefaultAlgorithm(): string;
    static getInstance(paramarg0: string): TrustManagerFactory;
    static getInstance(paramarg0: string, paramarg1: string): TrustManagerFactory;
    static getInstance(paramarg0: string, paramarg1: Provider): TrustManagerFactory;
    private constructor()
    engineGetTrustManagers(): TrustManager[];
    engineInit(arg0: KeyStore): void;
    engineInit(arg0: ManagerFactoryParameters): void;
}