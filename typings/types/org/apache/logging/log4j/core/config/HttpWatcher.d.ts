import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { Logger } from '../../../../../../org/apache/logging/log4j/Logger.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationListener } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationListener.d.ts'
import type { Reconfigurable } from '../../../../../../org/apache/logging/log4j/core/config/Reconfigurable.d.ts'
import type { AbstractWatcher } from '../../../../../../org/apache/logging/log4j/core/util/AbstractWatcher.d.ts'
import type { AuthorizationProvider } from '../../../../../../org/apache/logging/log4j/core/util/AuthorizationProvider.d.ts'
import type { Source } from '../../../../../../org/apache/logging/log4j/core/util/Source.d.ts'
import type { Watcher } from '../../../../../../org/apache/logging/log4j/core/util/Watcher.d.ts'
export class HttpWatcher extends AbstractWatcher {
    static CATEGORY: string;
    static ELEMENT_TYPE: string;
    constructor(configuration: Configuration, reconfigurable: Reconfigurable, configurationListeners: ConfigurationListener[], lastModifiedMillis: number)
    // private LOGGER: Logger;
    // private authorizationProvider: AuthorizationProvider;
    // private lastModifiedMillis: number;
    // private url: URL;
    getLastModified(): number;
    isModified(): boolean;
    newWatcher(reconfigurable: Reconfigurable, listeners: ConfigurationListener[], lastModifiedMillis: number): Watcher;
    // private refreshConfiguration(): boolean;
    watching(source: Source): void;
}