import type { KeyStore } from '../../../java/security/KeyStore.d.ts'
import type { KeyManager } from '../../../javax/net/ssl/KeyManager.d.ts'
import type { KeyManagerFactorySpi } from '../../../javax/net/ssl/KeyManagerFactorySpi.d.ts'
import type { ManagerFactoryParameters } from '../../../javax/net/ssl/ManagerFactoryParameters.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KeyManagerFactory extends Object {
    static getDefaultAlgorithm(): string;
    static getInstance(paramarg0: string): KeyManagerFactory;
    static getInstance(paramarg0: string, paramarg1: string): KeyManagerFactory;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: any }): KeyManagerFactory;
    constructor(arg0: KeyManagerFactorySpi, arg1: { [key: string]: any }, arg2: string)
    readonly algorithm: string;
    // private factorySpi: KeyManagerFactorySpi;
    readonly provider: { [key: string]: any };
    getAlgorithm(): string;
    getKeyManagers(): KeyManager[];
    getProvider(): { [key: string]: any };
    init(arg0: KeyStore, arg1: string[]): void;
    init(arg0: ManagerFactoryParameters): void;
}