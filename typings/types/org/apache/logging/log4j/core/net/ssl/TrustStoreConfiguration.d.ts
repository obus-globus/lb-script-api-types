import type { TrustManagerFactory } from '../../../../../../../javax/net/ssl/TrustManagerFactory.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractKeyStoreConfiguration } from '../../../../../../../org/apache/logging/log4j/core/net/ssl/AbstractKeyStoreConfiguration.d.ts'
import type { PasswordProvider } from '../../../../../../../org/apache/logging/log4j/core/net/ssl/PasswordProvider.d.ts'
export class TrustStoreConfiguration extends AbstractKeyStoreConfiguration {
    static createKeyStoreConfiguration(paramlocation: string, parampassword: string[], paramkeyStoreType: string, paramtrustManagerFactoryAlgorithm: string): TrustStoreConfiguration;
    static createKeyStoreConfiguration(paramlocation: string, parampassword: string[], parampasswordEnvironmentVariable: string, parampasswordFile: string, paramkeyStoreType: string, paramtrustManagerFactoryAlgorithm: string): TrustStoreConfiguration;
    static createKeyStoreConfiguration(paramlocation: string, parampassword: string, paramkeyStoreType: string, paramtrustManagerFactoryAlgorithm: string): TrustStoreConfiguration;
    constructor(location: string, password: string[], keyStoreType: string, trustManagerFactoryAlgorithm: string)
    constructor(location: string, password: string, keyStoreType: string, trustManagerFactoryAlgorithm: string)
    constructor(location: string, passwordProvider: () => string[], keyStoreType: string, trustManagerFactoryAlgorithm: string)
    readonly trustManagerFactoryAlgorithm: string;
    equals(obj: Object | null): boolean;
    getTrustManagerFactoryAlgorithm(): string;
    hashCode(): number;
    initTrustManagerFactory(): TrustManagerFactory;
}