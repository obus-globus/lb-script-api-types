import type { ApplicationEngine$Configuration } from '../../../../io/ktor/server/engine/ApplicationEngine$Configuration.d.ts'
import type { EngineConnectorConfig } from '../../../../io/ktor/server/engine/EngineConnectorConfig.d.ts'
import type { EngineSSLConnectorBuilder } from '../../../../io/ktor/server/engine/EngineSSLConnectorBuilder.d.ts'
import type { KeyStore } from '../../../../java/security/KeyStore.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EngineConnectorConfigJvmKt extends Object {
    static sslConnector(self: ApplicationEngine$Configuration, keyStore: KeyStore, keyAlias: string, keyStorePassword: () => string[], privateKeyPassword: () => string[], builder: (param0: EngineSSLConnectorBuilder) => void): void;
    static withPort(self: EngineConnectorConfig, otherPort: number): EngineConnectorConfig;
}