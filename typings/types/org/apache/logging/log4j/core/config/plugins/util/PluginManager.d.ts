import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PluginType } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginType.d.ts'
export class PluginManager extends Object {
    static addPackage(paramp: string): void;
    static addPackages(parampackages: string[]): void;
    static main(paramargs: string[]): void;
    constructor(category: string)
    // private category: string;
    readonly plugins: JavaMap<string, PluginType<Object>>;
    collectPlugins(): void;
    collectPlugins(packages: string[]): void;
    getPluginType(name: string): PluginType<Object>;
    getPlugins(): JavaMap<string, PluginType<Object>>;
}