import type { FingerprintTrustManagerFactoryBuilder } from '../../../../../io/netty/handler/ssl/util/FingerprintTrustManagerFactoryBuilder.d.ts'
import type { SimpleTrustManagerFactory } from '../../../../../io/netty/handler/ssl/util/SimpleTrustManagerFactory.d.ts'
import type { FastThreadLocal } from '../../../../../io/netty/util/concurrent/FastThreadLocal.d.ts'
import type { KeyStore } from '../../../../../java/security/KeyStore.d.ts'
import type { MessageDigest } from '../../../../../java/security/MessageDigest.d.ts'
import type { ManagerFactoryParameters } from '../../../../../javax/net/ssl/ManagerFactoryParameters.d.ts'
import type { TrustManager } from '../../../../../javax/net/ssl/TrustManager.d.ts'
import type { TrustManagerFactory } from '../../../../../javax/net/ssl/TrustManagerFactory.d.ts'
export class FingerprintTrustManagerFactory extends SimpleTrustManagerFactory {
    static builder(paramarg0: string): FingerprintTrustManagerFactoryBuilder;
    static getDefaultAlgorithm(): string;
    static getInstance(paramarg0: string): TrustManagerFactory;
    static getInstance(paramarg0: string, paramarg1: string): TrustManagerFactory;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: any }): TrustManagerFactory;
    constructor(...arg0: number[][])
    constructor(...arg0: string[])
    constructor(arg0: string, arg1: number[][])
    constructor(arg0: string[])
    // private fingerprints: number[][];
    // private tlmd: FastThreadLocal<MessageDigest>;
    // private tm: TrustManager;
    engineGetTrustManagers(): TrustManager[];
    engineInit(arg0: KeyStore): void;
    engineInit(arg0: ManagerFactoryParameters): void;
}