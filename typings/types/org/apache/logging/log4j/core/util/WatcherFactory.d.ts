import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationListener } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationListener.d.ts'
import type { Reconfigurable } from '../../../../../../org/apache/logging/log4j/core/config/Reconfigurable.d.ts'
import type { PluginType } from '../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginType.d.ts'
import type { Source } from '../../../../../../org/apache/logging/log4j/core/util/Source.d.ts'
import type { Watcher } from '../../../../../../org/apache/logging/log4j/core/util/Watcher.d.ts'
export class WatcherFactory extends Object {
    static getInstance(parampackages: string[]): WatcherFactory;
    static instantiate<T extends Watcher>(paramname: string, paramclazz: Class<T>, paramconfiguration: Configuration, paramreconfigurable: Reconfigurable, paramlisteners: ConfigurationListener[], paramlastModifiedMillis: number): T;
    private constructor(packages: string[])
    // private plugins: JavaMap<string, PluginType<Object>>;
    newWatcher(source: Source, configuration: Configuration, reconfigurable: Reconfigurable, configurationListeners: ConfigurationListener[], lastModifiedMillis: number): Watcher;
}