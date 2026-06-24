import type { Object } from '../../../java/lang/Object.d.ts'
import type { DiskLruCache } from '../../../okhttp3/internal/cache/DiskLruCache.d.ts'
import type { DiskLruCache$Entry } from '../../../okhttp3/internal/cache/DiskLruCache$Entry.d.ts'
import type { Sink } from '../../../okio/Sink.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
export class DiskLruCache$Editor extends Object {
    constructor(null_: DiskLruCache, entry: DiskLruCache$Entry)
    // private done: boolean;
    // private entry: DiskLruCache$Entry;
    /*not mapped: */ getEntry$okhttp(): DiskLruCache$Entry;
    // private written: (Object | null)[] | null;
    /*not mapped: */ getWritten$okhttp(): (Object | null)[] | null;
    abort(): void;
    commit(): void;
    detach(): void;
    newSink(index: number): Sink;
    newSource(index: number): Source | null;
}