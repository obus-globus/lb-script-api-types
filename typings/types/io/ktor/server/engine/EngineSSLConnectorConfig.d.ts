import type { EngineConnectorConfig } from '../../../../io/ktor/server/engine/EngineConnectorConfig.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { KeyStore } from '../../../../java/security/KeyStore.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface EngineSSLConnectorConfig extends EngineConnectorConfig, Object {
    readonly enabledProtocols: string[] | null;
    readonly keyAlias: string;
    readonly keyStore: KeyStore;
    readonly keyStorePassword: () => string[];
    readonly keyStorePath: File | null;
    readonly privateKeyPassword: () => string[];
    readonly trustStore: KeyStore | null;
    readonly trustStorePath: File | null;
}