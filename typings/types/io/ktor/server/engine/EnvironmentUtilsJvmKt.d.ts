import type { ApplicationEngine$Configuration } from '../../../../io/ktor/server/engine/ApplicationEngine$Configuration.d.ts'
import type { ApplicationEnvironmentBuilder } from '../../../../io/ktor/server/engine/ApplicationEnvironmentBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../kotlin/Pair.d.ts'
export class EnvironmentUtilsJvmKt extends Object {
    static clearEnvironmentProperty(key: string): void;
    static configurePlatformProperties(self: ApplicationEnvironmentBuilder, args: string[]): void;
    static configureSSLConnectors(self: ApplicationEngine$Configuration, host: string, sslPort: string, sslKeyStorePath: string | null, sslKeyStorePassword: string | null, sslPrivateKeyPassword: string | null, sslKeyAlias: string, sslTrustStorePath: string | null, sslTrustStorePassword: string | null, sslEnabledProtocols: string[] | null): void;
    static getEnvironmentProperty(key: string): string | null;
    static getKtorEnvironmentProperties(): Pair<string, string>[];
    static setEnvironmentProperty(key: string, value: string): void;
}