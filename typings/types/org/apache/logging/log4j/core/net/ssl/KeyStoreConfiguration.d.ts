import type { KeyManagerFactory } from '../../../../../../../javax/net/ssl/KeyManagerFactory.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractKeyStoreConfiguration } from '../../../../../../../org/apache/logging/log4j/core/net/ssl/AbstractKeyStoreConfiguration.d.ts'
import type { PasswordProvider } from '../../../../../../../org/apache/logging/log4j/core/net/ssl/PasswordProvider.d.ts'
export class KeyStoreConfiguration extends AbstractKeyStoreConfiguration {
    static createKeyStoreConfiguration(paramlocation: string, parampassword: string[], paramkeyStoreType: string, paramkeyManagerFactoryAlgorithm: string): KeyStoreConfiguration;
    static createKeyStoreConfiguration(paramlocation: string, parampassword: string[], parampasswordEnvironmentVariable: string, parampasswordFile: string, paramkeyStoreType: string, paramkeyManagerFactoryAlgorithm: string): KeyStoreConfiguration;
    static createKeyStoreConfiguration(paramlocation: string, parampassword: string, paramkeyStoreType: string, paramkeyManagerFactoryAlgorithm: string): KeyStoreConfiguration;
    constructor(location: string, password: string[], keyStoreType: string, keyManagerFactoryAlgorithm: string)
    constructor(location: string, password: string, keyStoreType: string, keyManagerFactoryAlgorithm: string)
    constructor(location: string, passwordProvider: () => string[], keyStoreType: string, keyManagerFactoryAlgorithm: string)
    readonly keyManagerFactoryAlgorithm: string;
    equals(obj: Object | null): boolean;
    getKeyManagerFactoryAlgorithm(): string;
    hashCode(): number;
    initKeyManagerFactory(): KeyManagerFactory;
}