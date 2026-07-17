import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { JsonElement } from '../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Config } from '../../../../com/viaversion/viaversion/util/Config.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Logger } from '../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigSection extends Object {
    constructor(arg0: Config, arg1: string)
    constructor(arg0: Config, arg1: string, arg2: JavaMap<string, Object>)
    // private path: string;
    // private root: Config;
    values: JavaMap<string, Object>;
    contains(arg0: string): boolean;
    // private fullKeyInPath(arg0: string): string;
    get<T extends unknown>(arg0: string): T;
    get<T extends unknown>(arg0: string, arg1: T): T;
    getBoolean(arg0: string, arg1: boolean): boolean;
    getDouble(arg0: string, arg1: number): number;
    getInt(arg0: string, arg1: number): number;
    getIntegerList(arg0: string): number[];
    getListSafe<T extends unknown>(arg0: string, arg1: Class<T>, arg2: string): T[];
    getSection(arg0: string): ConfigSection;
    getSerializedComponent(arg0: string): JsonElement;
    getString(arg0: string, arg1: string): string;
    getStringList(arg0: string): string[];
    getValues(): JavaMap<string, Object>;
    logger(): Logger;
    root(): Config;
    set(arg0: string, arg1: Object): void;
}