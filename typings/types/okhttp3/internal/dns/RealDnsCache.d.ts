import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Duration } from '../../../kotlin/time/Duration.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { DnsQuery$Factory } from '../../../okhttp3/internal/dns/DnsQuery$Factory.d.ts'
import type { MemoryCache } from '../../../okhttp3/internal/dns/MemoryCache.d.ts'
import type { Question } from '../../../okhttp3/internal/dns/Question.d.ts'
import type { RealDnsCache$Entry } from '../../../okhttp3/internal/dns/RealDnsCache$Entry.d.ts'
export class RealDnsCache extends Object {
    protected constructor()
    // private atomicHitCount: AtomicInteger;
    // private atomicNetworkCount: AtomicInteger;
    // private atomicRequestCount: AtomicInteger;
    // private cache: MemoryCache<Question, RealDnsCache$Entry>;
    // private failureTimeToLive: Duration;
// (invalid TS: name contains '-')     /*not mapped: */ getFailureTimeToLive-UwyO8pc$okhttp(): Duration;
    /*not mapped: */ getHitCount$okhttp(): number;
    /*not mapped: */ getMaxSize$okhttp(): number;
    // private maximumTimeToLive: Duration;
// (invalid TS: name contains '-')     /*not mapped: */ getMaximumTimeToLive-UwyO8pc$okhttp(): Duration;
    // private minimumTimeToLive: Duration;
// (invalid TS: name contains '-')     /*not mapped: */ getMinimumTimeToLive-UwyO8pc$okhttp(): Duration;
    /*not mapped: */ getNetworkCount$okhttp(): number;
    /*not mapped: */ getRequestCount$okhttp(): number;
    // private revalidateBeforeExpire: Duration;
// (invalid TS: name contains '-')     /*not mapped: */ getRevalidateBeforeExpire-UwyO8pc$okhttp(): Duration;
    /*not mapped: */ getSize$okhttp(): number;
    // private taskRunner: TaskRunner;
    evictAll(): void;
    wrap(delegate: DnsQuery$Factory): DnsQuery$Factory;
}