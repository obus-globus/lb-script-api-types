import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { FileChannel } from '../../../../java/nio/channels/FileChannel.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TelemetryEventInstance } from '../../../../net/minecraft/client/telemetry/TelemetryEventInstance.d.ts'
import type { TelemetryEventLogger } from '../../../../net/minecraft/client/telemetry/TelemetryEventLogger.d.ts'
import type { JsonEventLog } from '../../../../net/minecraft/util/eventlog/JsonEventLog.d.ts'
import type { ConsecutiveExecutor } from '../../../../net/minecraft/util/thread/ConsecutiveExecutor.d.ts'
export class TelemetryEventLog extends Object implements AutoCloseable {
    constructor(channel: FileChannel, executor: Executor)
    // private consecutiveExecutor: ConsecutiveExecutor;
    // private log: JsonEventLog<TelemetryEventInstance>;
    close(): void;
    logger(): TelemetryEventLogger;
}