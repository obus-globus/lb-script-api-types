import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { ApplicationConfigValue } from '../../../../io/ktor/server/config/ApplicationConfigValue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MergedApplicationConfig extends Object implements ApplicationConfig {
    constructor(first: ApplicationConfig, second: ApplicationConfig)
    readonly first: ApplicationConfig;
    // private firstKeys: string[];
    // private /*not mapped: */ getFirstKeys(): string[];
    readonly second: ApplicationConfig;
    // private secondKeys: string[];
    // private /*not mapped: */ getSecondKeys(): string[];
    config(path: string): ApplicationConfig;
    configList(path: string): ApplicationConfig[];
    keys(): string[];
    // private merge(first: ApplicationConfigValue | null, second: ApplicationConfigValue | null): ApplicationConfigValue | null;
    // private mergeMapConfigValues(first: ApplicationConfigValue, second: ApplicationConfigValue): ApplicationConfigValue;
    property(path: string): ApplicationConfigValue;
    propertyOrNull(path: string): ApplicationConfigValue | null;
    toMap(): JavaMap<string, Object | null>;
}