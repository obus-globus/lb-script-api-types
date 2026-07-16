import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DownloadQueue$BatchConfig } from '../../../../net/minecraft/server/packs/DownloadQueue$BatchConfig.d.ts'
import type { DownloadQueue$BatchResult } from '../../../../net/minecraft/server/packs/DownloadQueue$BatchResult.d.ts'
import type { DownloadQueue$DownloadRequest } from '../../../../net/minecraft/server/packs/DownloadQueue$DownloadRequest.d.ts'
import type { DownloadQueue$FileInfoEntry } from '../../../../net/minecraft/server/packs/DownloadQueue$FileInfoEntry.d.ts'
import type { DownloadQueue$LogEntry } from '../../../../net/minecraft/server/packs/DownloadQueue$LogEntry.d.ts'
import type { JsonEventLog } from '../../../../net/minecraft/util/eventlog/JsonEventLog.d.ts'
import type { ConsecutiveExecutor } from '../../../../net/minecraft/util/thread/ConsecutiveExecutor.d.ts'
export class DownloadQueue extends Object implements AutoCloseable {
    constructor(cacheDir: Path)
    // private cacheDir: Path;
    // private eventLog: JsonEventLog<DownloadQueue$LogEntry>;
    // private tasks: ConsecutiveExecutor;
    close(): void;
    downloadBatch(config: DownloadQueue$BatchConfig, requests: Map<UUID, DownloadQueue$DownloadRequest>): CompletableFuture<DownloadQueue$BatchResult>;
    // private getFileInfo(downloadedFile: Path): Either<string, DownloadQueue$FileInfoEntry>;
    // private runDownload(config: DownloadQueue$BatchConfig, requests: Map<UUID, DownloadQueue$DownloadRequest>): DownloadQueue$BatchResult;
}