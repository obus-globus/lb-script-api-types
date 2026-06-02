import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TelemetryEventLog } from '../../../../net/minecraft/client/telemetry/TelemetryEventLog.d.ts'
import type { TelemetryEventLogger } from '../../../../net/minecraft/client/telemetry/TelemetryEventLogger.d.ts'
import type { EventLogDirectory } from '../../../../net/minecraft/util/eventlog/EventLogDirectory.d.ts'
export class TelemetryLogManager extends Object implements AutoCloseable {
    static open(paramroot: Path[][]): CompletableFuture<Object>;
    private constructor(directory: EventLogDirectory)
    // private directory: EventLogDirectory;
    // private sessionLog: CompletableFuture<Optional<TelemetryEventLog>>;
    close(): void;
    openLogger(): CompletableFuture<Optional<TelemetryEventLogger>>;
}