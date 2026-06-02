import type { Config } from '../../../../com/viaversion/viaversion/api/configuration/Config.d.ts'
import type { ConfigurationProvider } from '../../../../com/viaversion/viaversion/api/configuration/ConfigurationProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigurationProviderImpl extends Object implements ConfigurationProvider {
    constructor()
    // private configs: Config[];
    configs(): E[];
    register(arg0: Config): void;
    reloadConfigs(): void;
}