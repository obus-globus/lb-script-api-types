import type { Config } from '../../../../../com/viaversion/viaversion/api/configuration/Config.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ConfigurationProvider extends Object{
    configs(): E[];
    register(arg0: Config): void;
    reloadConfigs(): void;
}