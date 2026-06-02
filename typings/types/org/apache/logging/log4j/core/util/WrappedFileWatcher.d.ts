import type { File } from '../../../../../../java/io/File.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationListener } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationListener.d.ts'
import type { Reconfigurable } from '../../../../../../org/apache/logging/log4j/core/config/Reconfigurable.d.ts'
import type { AbstractWatcher } from '../../../../../../org/apache/logging/log4j/core/util/AbstractWatcher.d.ts'
import type { FileWatcher } from '../../../../../../org/apache/logging/log4j/core/util/FileWatcher.d.ts'
import type { Source } from '../../../../../../org/apache/logging/log4j/core/util/Source.d.ts'
import type { Watcher } from '../../../../../../org/apache/logging/log4j/core/util/Watcher.d.ts'
export class WrappedFileWatcher extends AbstractWatcher implements FileWatcher {
    static CATEGORY: string;
    static ELEMENT_TYPE: string;
    constructor(watcher: FileWatcher)
    constructor(watcher: FileWatcher, configuration: Configuration, reconfigurable: Reconfigurable, configurationListeners: ConfigurationListener[], lastModifiedMillis: number)
    // private lastModifiedMillis: number;
    // private watcher: FileWatcher;
    fileModified(file: File): void;
    getLastModified(): number;
    getListeners(): ConfigurationListener[];
    isModified(): boolean;
    modified(): void;
    newWatcher(reconfigurable: Reconfigurable, listeners: ConfigurationListener[], lastModifiedMillis: number): Watcher;
    watching(source: Source): void;
}