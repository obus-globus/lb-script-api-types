import type { ThreadLocal } from '../../../../../../java/lang/ThreadLocal.d.ts'
import type { Callable } from '../../../../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScatterStatistics } from '../../../../../../org/apache/commons/compress/archivers/zip/ScatterStatistics.d.ts'
import type { ScatterZipOutputStream } from '../../../../../../org/apache/commons/compress/archivers/zip/ScatterZipOutputStream.d.ts'
import type { ZipArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntry.d.ts'
import type { ZipArchiveEntryRequestSupplier } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntryRequestSupplier.d.ts'
import type { ZipArchiveOutputStream } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveOutputStream.d.ts'
import type { InputStreamSupplier } from '../../../../../../org/apache/commons/compress/parallel/InputStreamSupplier.d.ts'
import type { ScatterGatherBackingStoreSupplier } from '../../../../../../org/apache/commons/compress/parallel/ScatterGatherBackingStoreSupplier.d.ts'
export class ParallelScatterZipCreator extends Object {
    constructor()
    constructor(arg0: ExecutorService)
    constructor(arg0: ExecutorService, arg1: ScatterGatherBackingStoreSupplier)
    constructor(arg0: ExecutorService, arg1: ScatterGatherBackingStoreSupplier, arg2: number)
    // private backingStoreSupplier: ScatterGatherBackingStoreSupplier;
    // private compressionDoneAt: number;
    // private compressionLevel: number;
    // private executorService: ExecutorService;
    // private futures: Future<ScatterZipOutputStream>[];
    // private scatterDoneAt: number;
    // private startedAt: number;
    // private streams: ScatterZipOutputStream[];
    // private tlScatterStreams: ThreadLocal<ScatterZipOutputStream>;
    addArchiveEntry(arg0: ZipArchiveEntry, arg1: InputStreamSupplier): void;
    addArchiveEntry(arg0: ZipArchiveEntryRequestSupplier): void;
    // private closeAll(): void;
    createCallable(arg0: ZipArchiveEntry, arg1: InputStreamSupplier): () => ScatterZipOutputStream;
    createCallable(arg0: ZipArchiveEntryRequestSupplier): () => ScatterZipOutputStream;
    // private createDeferred(arg0: ScatterGatherBackingStoreSupplier): ScatterZipOutputStream;
    getStatisticsMessage(): ScatterStatistics;
    submit(arg0: () => Object | null): void;
    submitStreamAwareCallable(arg0: () => ScatterZipOutputStream): void;
    writeTo(arg0: ZipArchiveOutputStream): void;
}