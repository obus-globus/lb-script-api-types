import type { TimeUnit } from '../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Duration } from '../kotlin/time/Duration.d.ts'
import type { CacheControl } from '../okhttp3/CacheControl.d.ts'
export class CacheControl$Builder extends Object {
    constructor()
    // private immutable: boolean;
    /*not mapped: */ getImmutable$okhttp(): boolean;
    // private maxAgeSeconds: number;
    /*not mapped: */ getMaxAgeSeconds$okhttp(): number;
    // private maxStaleSeconds: number;
    /*not mapped: */ getMaxStaleSeconds$okhttp(): number;
    // private minFreshSeconds: number;
    /*not mapped: */ getMinFreshSeconds$okhttp(): number;
    // private noCache: boolean;
    /*not mapped: */ getNoCache$okhttp(): boolean;
    // private noStore: boolean;
    /*not mapped: */ getNoStore$okhttp(): boolean;
    // private noTransform: boolean;
    /*not mapped: */ getNoTransform$okhttp(): boolean;
    // private onlyIfCached: boolean;
    /*not mapped: */ getOnlyIfCached$okhttp(): boolean;
    build(): CacheControl;
    immutable(): CacheControl$Builder;
    maxAge(maxAge: number, timeUnit: TimeUnit): CacheControl$Builder;
    maxAge(maxAge: Duration): CacheControl$Builder;
    maxStale(maxStale: number, timeUnit: TimeUnit): CacheControl$Builder;
    maxStale(maxStale: Duration): CacheControl$Builder;
    minFresh(minFresh: number, timeUnit: TimeUnit): CacheControl$Builder;
    minFresh(minFresh: Duration): CacheControl$Builder;
    noCache(): CacheControl$Builder;
    noStore(): CacheControl$Builder;
    noTransform(): CacheControl$Builder;
    onlyIfCached(): CacheControl$Builder;
}