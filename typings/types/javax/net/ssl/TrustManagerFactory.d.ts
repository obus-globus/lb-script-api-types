import type { JavaMap } from '../../../JavaMap.d.ts'
import type { KeyStore } from '../../../java/security/KeyStore.d.ts'
import type { ManagerFactoryParameters } from '../../../javax/net/ssl/ManagerFactoryParameters.d.ts'
import type { TrustManager } from '../../../javax/net/ssl/TrustManager.d.ts'
import type { TrustManagerFactorySpi } from '../../../javax/net/ssl/TrustManagerFactorySpi.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TrustManagerFactory extends Object {
    static getDefaultAlgorithm(): string;
    static getInstance(paramarg0: string): TrustManagerFactory;
    static getInstance(paramarg0: string, paramarg1: string): TrustManagerFactory;
    static getInstance(paramarg0: string, paramarg1: JavaMap<any, any>): TrustManagerFactory;
    constructor(arg0: TrustManagerFactorySpi, arg1: JavaMap<any, any>, arg2: string)
    readonly algorithm: string;
    // private factorySpi: TrustManagerFactorySpi;
    readonly provider: JavaMap<any, any>;
    getAlgorithm(): string;
    getProvider(): JavaMap<any, any>;
    getTrustManagers(): TrustManager[];
    init(arg0: KeyStore): void;
    init(arg0: ManagerFactoryParameters): void;
}