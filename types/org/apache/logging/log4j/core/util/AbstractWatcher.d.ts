import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationListener } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationListener.d.ts'
import type { Reconfigurable } from '../../../../../../org/apache/logging/log4j/core/config/Reconfigurable.d.ts'
import type { Log4jThreadFactory } from '../../../../../../org/apache/logging/log4j/core/util/Log4jThreadFactory.d.ts'
import type { Source } from '../../../../../../org/apache/logging/log4j/core/util/Source.d.ts'
import type { Watcher } from '../../../../../../org/apache/logging/log4j/core/util/Watcher.d.ts'
export abstract class AbstractWatcher extends Object implements Watcher {
    static CATEGORY: string;
    static ELEMENT_TYPE: string;
    constructor(configuration: Configuration, reconfigurable: Reconfigurable, configurationListeners: ConfigurationListener[])
    readonly configuration: Configuration;
    // private configurationListeners: ConfigurationListener[];
    // private reconfigurable: Reconfigurable;
    readonly source: Source;
    // private threadFactory: Log4jThreadFactory;
    getConfiguration(): Configuration;
    getLastModified(): number;
    getListeners(): ConfigurationListener[];
    getSource(): Source;
    isModified(): boolean;
    modified(): void;
    watching(source: Source): void;
}