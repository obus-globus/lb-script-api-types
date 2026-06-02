import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConfigurationListener } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationListener.d.ts'
import type { Reconfigurable } from '../../../../../../org/apache/logging/log4j/core/config/Reconfigurable.d.ts'
import type { Source } from '../../../../../../org/apache/logging/log4j/core/util/Source.d.ts'
export interface Watcher extends Object{
    getLastModified(): number;
    getListeners(): ConfigurationListener[];
    getSource(): Source;
    isModified(): boolean;
    modified(): void;
    newWatcher(reconfigurable: Reconfigurable, listeners: ConfigurationListener[], lastModifiedMillis: number): Watcher;
    watching(source: Source): void;
}