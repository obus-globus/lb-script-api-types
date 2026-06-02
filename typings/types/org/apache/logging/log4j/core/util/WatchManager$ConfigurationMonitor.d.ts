import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Watcher } from '../../../../../../org/apache/logging/log4j/core/util/Watcher.d.ts'
export class WatchManager$ConfigurationMonitor extends Object {
    constructor(lastModifiedMillis: number, watcher: Watcher)
    // private lastModifiedMillis: number;
    readonly watcher: Watcher;
    getWatcher(): Watcher;
    // private setLastModifiedMillis(lastModifiedMillis: number): void;
    toString(): string;
}