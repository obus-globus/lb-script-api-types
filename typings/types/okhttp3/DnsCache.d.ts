import type { Object } from '../java/lang/Object.d.ts'
import type { Duration } from '../kotlin/time/Duration.d.ts'
import type { RealDnsCache } from '../okhttp3/internal/dns/RealDnsCache.d.ts'
export class DnsCache extends Object {
// (invalid TS: name contains '-')     constructor(-delegate: RealDnsCache)
// (invalid TS: name contains '-')     -delegate: RealDnsCache;
    /*not mapped: */ failureTimeToLive(): Duration;
    /*not mapped: */ hitCount(): number;
    /*not mapped: */ maxSize(): number;
    /*not mapped: */ maximumTimeToLive(): Duration;
    /*not mapped: */ minimumTimeToLive(): Duration;
    /*not mapped: */ networkCount(): number;
    /*not mapped: */ requestCount(): number;
    /*not mapped: */ revalidateBeforeExpire(): Duration;
    /*not mapped: */ size(): number;
    evictAll(): void;
}