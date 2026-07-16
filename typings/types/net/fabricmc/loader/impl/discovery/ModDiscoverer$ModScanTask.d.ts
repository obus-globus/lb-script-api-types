import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { ForkJoinPool } from '../../../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask } from '../../../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { RecursiveTask } from '../../../../../java/util/concurrent/RecursiveTask.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModCandidateImpl } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateImpl.d.ts'
import type { ModDiscoverer } from '../../../../../net/fabricmc/loader/impl/discovery/ModDiscoverer.d.ts'
import type { ModDiscoverer$RewindableInputStream } from '../../../../../net/fabricmc/loader/impl/discovery/ModDiscoverer$RewindableInputStream.d.ts'
import type { ModDiscoverer$ZipEntrySource } from '../../../../../net/fabricmc/loader/impl/discovery/ModDiscoverer$ZipEntrySource.d.ts'
import type { LoaderModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/LoaderModMetadata.d.ts'
export class ModDiscoverer$ModScanTask extends RecursiveTask<ModCandidateImpl> {
    static adapt(paramarg0: () => void, paramarg1: Object | null): ForkJoinTask<Object>;
    static adapt(paramarg0: () => Object | null): ForkJoinTask<Object>;
    static adapt(paramarg0: () => void): ForkJoinTask<Object>;
    static adaptInterruptible(paramarg0: () => void, paramarg1: Object | null): ForkJoinTask<Object>;
    static adaptInterruptible(paramarg0: () => Object | null): ForkJoinTask<Object>;
    static adaptInterruptible(paramarg0: () => void): ForkJoinTask<Object>;
    static getPool(): ForkJoinPool;
    static getQueuedTaskCount(): number;
    static getSurplusQueuedTaskCount(): number;
    static helpQuiesce(): void;
    static inForkJoinPool(): boolean;
    static invokeAll(paramarg0: (Object | null)[]): (Object | null)[];
    static invokeAll(paramarg0: ForkJoinTask<Object>, paramarg1: ForkJoinTask<Object>): void;
    static invokeAll(paramarg0: Object | null): void;
    constructor(null_: ModDiscoverer, arg1: Path[], arg2: boolean)
    // private hash: number;
    // private is: ModDiscoverer$RewindableInputStream;
    // private localPath: string;
    // private parentPaths: string[];
    // private paths: Path[];
    // private requiresRemap: boolean;
    compute(): ModCandidateImpl;
    // private computeDir(arg0: Path): ModCandidateImpl;
    // private computeJarFile(arg0: Path): ModCandidateImpl;
    // private computeJarStream(): ModCandidateImpl;
    // private computeNestedMods(arg0: ModDiscoverer$ZipEntrySource): ModDiscoverer$ModScanTask[];
    // private parseMetadata(arg0: InputStream, arg1: string): LoaderModMetadata;
}