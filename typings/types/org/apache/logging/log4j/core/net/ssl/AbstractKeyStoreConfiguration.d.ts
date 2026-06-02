import type { KeyStore } from '../../../../../../../java/security/KeyStore.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PasswordProvider } from '../../../../../../../org/apache/logging/log4j/core/net/ssl/PasswordProvider.d.ts'
import type { StoreConfiguration } from '../../../../../../../org/apache/logging/log4j/core/net/ssl/StoreConfiguration.d.ts'
export class AbstractKeyStoreConfiguration extends StoreConfiguration<KeyStore> {
    constructor(location: string, password: string[], keyStoreType: string)
    constructor(location: string, password: string, keyStoreType: string)
    constructor(location: string, passwordProvider: () => kotlin.CharArray, keyStoreType: string)
    readonly keyStore: KeyStore;
    readonly keyStoreType: string;
    equals(obj: Object | null): boolean;
    getKeyStore(): KeyStore;
    getKeyStoreType(): string;
    hashCode(): number;
    load(): KeyStore;
}