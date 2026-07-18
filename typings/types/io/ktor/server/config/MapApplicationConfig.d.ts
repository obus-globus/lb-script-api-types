import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { ApplicationConfigValue } from '../../../../io/ktor/server/config/ApplicationConfigValue.d.ts'
import type { MapApplicationConfig$Companion } from '../../../../io/ktor/server/config/MapApplicationConfig$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../kotlin/Pair.d.ts'
export class MapApplicationConfig extends Object implements ApplicationConfig {
    static Companion: MapApplicationConfig$Companion;
    constructor()
    constructor(...values: Pair<string, string>[])
    constructor(values: Pair<string, string>[])
    constructor(map: JavaMap<string, string>, path: string)
    // private map: JavaMap<string, string>;
    // private /*not mapped: */ getMap(): JavaMap<string, string>;
    // private path: string;
    // private /*not mapped: */ getPath(): string;
    config(path: string): ApplicationConfig;
    configList(path: string): ApplicationConfig[];
    keys(): string[];
    property(path: string): ApplicationConfigValue;
    propertyOrNull(path: string): ApplicationConfigValue | null;
    put(path: string, value: string): void;
    put(path: string, values: string[]): void;
    toMap(): JavaMap<string, Object | null>;
}