import type { SSLContext } from '../../../../../../../javax/net/ssl/SSLContext.d.ts'
import type { SSLServerSocketFactory } from '../../../../../../../javax/net/ssl/SSLServerSocketFactory.d.ts'
import type { SSLSocketFactory } from '../../../../../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KeyStoreConfiguration } from '../../../../../../../org/apache/logging/log4j/core/net/ssl/KeyStoreConfiguration.d.ts'
import type { TrustStoreConfiguration } from '../../../../../../../org/apache/logging/log4j/core/net/ssl/TrustStoreConfiguration.d.ts'
export class SslConfiguration extends Object {
    static createSSLConfiguration(paramprotocol: string, paramkeyStoreConfig: KeyStoreConfiguration, paramtrustStoreConfig: TrustStoreConfiguration): SslConfiguration;
    static createSSLConfiguration(paramprotocol: string, paramkeyStoreConfig: KeyStoreConfiguration, paramtrustStoreConfig: TrustStoreConfiguration, paramverifyHostName: boolean): SslConfiguration;
    private constructor(protocol: string, verifyHostName: boolean, keyStoreConfig: KeyStoreConfiguration, trustStoreConfig: TrustStoreConfiguration)
    readonly keyStoreConfig: KeyStoreConfiguration;
    readonly protocol: string;
    readonly sslContext: SSLContext;
    readonly trustStoreConfig: TrustStoreConfiguration;
    readonly verifyHostName: boolean;
    clearSecrets(): void;
    equals(obj: Object | null): boolean;
    getKeyStoreConfig(): KeyStoreConfiguration;
    getProtocol(): string;
    getSslContext(): SSLContext;
    getSslServerSocketFactory(): SSLServerSocketFactory;
    getSslSocketFactory(): SSLSocketFactory;
    getTrustStoreConfig(): TrustStoreConfiguration;
    hashCode(): number;
    isVerifyHostName(): boolean;
}