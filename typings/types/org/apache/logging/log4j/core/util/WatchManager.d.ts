import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { ScheduledFuture } from '../../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractLifeCycle } from '../../../../../../org/apache/logging/log4j/core/AbstractLifeCycle.d.ts'
import type { ConfigurationScheduler } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationScheduler.d.ts'
import type { FileWatcher } from '../../../../../../org/apache/logging/log4j/core/util/FileWatcher.d.ts'
import type { Source } from '../../../../../../org/apache/logging/log4j/core/util/Source.d.ts'
import type { WatchEventService } from '../../../../../../org/apache/logging/log4j/core/util/WatchEventService.d.ts'
import type { WatchManager$ConfigurationMonitor } from '../../../../../../org/apache/logging/log4j/core/util/WatchManager$ConfigurationMonitor.d.ts'
import type { Watcher } from '../../../../../../org/apache/logging/log4j/core/util/Watcher.d.ts'
export class WatchManager extends AbstractLifeCycle {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    constructor(scheduler: ConfigurationScheduler)
    // private eventServiceList: WatchEventService[];
    // private future: ScheduledFuture<Object>;
    readonly id: UUID;
    readonly intervalSeconds: number;
    // private scheduler: ConfigurationScheduler;
    readonly watchers: JavaMap<Source, WatchManager$ConfigurationMonitor>;
    checkFiles(): void;
    getConfigurationWatchers(): JavaMap<Source, Watcher>;
    getId(): UUID;
    getIntervalSeconds(): number;
    getWatchers(): JavaMap<File, FileWatcher>;
    hasEventListeners(): boolean;
    // private millisToString(millis: number): string;
    reset(): void;
    reset(file: File): void;
    reset(source: Source): void;
    setIntervalSeconds(intervalSeconds: number): void;
    start(): void;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    toString(): string;
    unwatch(source: Source): void;
    unwatchFile(file: File): void;
    watch(source: Source, watcher: Watcher): void;
    watchFile(file: File, fileWatcher: FileWatcher): void;
}