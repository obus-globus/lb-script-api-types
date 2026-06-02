import type { Closeable } from '../java/io/Closeable.d.ts'
import type { File } from '../java/io/File.d.ts'
import type { Flushable } from '../java/io/Flushable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Iterator } from '../java/util/Iterator.d.ts'
import type { Cache$Companion } from '../okhttp3/Cache$Companion.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
import type { CacheRequest } from '../okhttp3/internal/cache/CacheRequest.d.ts'
import type { CacheStrategy } from '../okhttp3/internal/cache/CacheStrategy.d.ts'
import type { DiskLruCache } from '../okhttp3/internal/cache/DiskLruCache.d.ts'
import type { DiskLruCache$Editor } from '../okhttp3/internal/cache/DiskLruCache$Editor.d.ts'
import type { TaskRunner } from '../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { FileSystem } from '../okio/FileSystem.d.ts'
import type { Path } from '../okio/Path.d.ts'
export class Cache extends Object implements Closeable, Flushable {
    static Companion: Cache$Companion;
    static key(paramarg0: HttpUrl): string;
    constructor(directory: File, maxSize: number)
    constructor(fileSystem: FileSystem, directory: Path, maxSize: number)
    constructor(directory: Path, maxSize: number, fileSystem: FileSystem, taskRunner: TaskRunner)
    // private cache: DiskLruCache;
    /*not mapped: */ getCache$okhttp(): DiskLruCache;
    directory(): File;
    /*not mapped: */ directoryPath(): Path;
    // private hitCount: number;
    /*not mapped: */ isClosed(): boolean;
    // private networkCount: number;
    // private requestCount: number;
    // private writeAbortCount: number;
    /*not mapped: */ getWriteAbortCount$okhttp(): number;
    // private writeSuccessCount: number;
    /*not mapped: */ getWriteSuccessCount$okhttp(): number;
    // private abortQuietly(editor: DiskLruCache$Editor | null): void;
    close(): void;
    delete(): void;
    directory(): File;
    evictAll(): void;
    flush(): void;
    get(request: Request): Response | null;
    hitCount(): number;
    initialize(): void;
    maxSize(): number;
    networkCount(): number;
    put(response: Response): CacheRequest | null;
    remove(request: Request): void;
    requestCount(): number;
    size(): number;
    trackConditionalCacheHit(): void;
    trackResponse(cacheStrategy: CacheStrategy): void;
    update(cached: Response, network: Response): void;
    urls(): Iterator<string>;
    writeAbortCount(): number;
    writeSuccessCount(): number;
}