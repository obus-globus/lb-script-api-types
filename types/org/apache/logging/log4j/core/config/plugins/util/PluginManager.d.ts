import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PluginType } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginType.d.ts'
export class PluginManager extends Object {
    static addPackage(paramp: string): void;
    static addPackages(parampackages: E[]): void;
    static main(paramargs: (Object | null)[]): void;
    constructor(category: string)
    // private category: string;
    readonly plugins: { [key: string]: PluginType<Object> };
    collectPlugins(): void;
    collectPlugins(packages: string[]): void;
    getPluginType(name: string): PluginType<Object>;
    getPlugins(): { [key: string]: PluginType<Object> };
}