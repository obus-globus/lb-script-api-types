import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ApplicationConfigValue } from '../../../../io/ktor/server/config/ApplicationConfigValue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ApplicationConfig extends Object{
    config(path: string): ApplicationConfig;
    configList(path: string): ApplicationConfig[];
    keys(): string[];
    property(path: string): ApplicationConfigValue;
    propertyOrNull(path: string): ApplicationConfigValue | null;
    toMap(): JavaMap<string, Object | null>;
}