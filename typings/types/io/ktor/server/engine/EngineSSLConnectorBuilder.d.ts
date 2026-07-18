import type { EngineConnectorBuilder } from '../../../../io/ktor/server/engine/EngineConnectorBuilder.d.ts'
import type { EngineSSLConnectorConfig } from '../../../../io/ktor/server/engine/EngineSSLConnectorConfig.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { KeyStore } from '../../../../java/security/KeyStore.d.ts'
export class EngineSSLConnectorBuilder extends EngineConnectorBuilder implements EngineSSLConnectorConfig {
    constructor(keyStore: KeyStore, keyAlias: string, keyStorePassword: () => string[], privateKeyPassword: () => string[])
    enabledProtocols: string[] | null;
    keyAlias: string;
    keyStore: KeyStore;
    keyStorePassword: () => string[];
    keyStorePath: File | null;
    port: number;
    privateKeyPassword: () => string[];
    trustStore: KeyStore | null;
    trustStorePath: File | null;
}