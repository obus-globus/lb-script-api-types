import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Config } from '../../../../com/typesafe/config/Config.d.ts'
import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { ApplicationConfigValue } from '../../../../io/ktor/server/config/ApplicationConfigValue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HoconApplicationConfig extends Object implements ApplicationConfig {
    constructor(config: Config)
    // private config: Config;
    config(path: string): ApplicationConfig;
    configList(path: string): ApplicationConfig[];
    keys(): string[];
    property(path: string): ApplicationConfigValue;
    propertyOrNull(path: string): ApplicationConfigValue | null;
    toMap(): JavaMap<string, Object | null>;
}