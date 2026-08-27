import type { Object } from '../../../java/lang/Object.d.ts'
import type { ComparableTimeMark } from '../../../kotlin/time/ComparableTimeMark.d.ts'
import type { DnsQuery } from '../../../okhttp3/internal/dns/DnsQuery.d.ts'
import type { RealDnsCache$CacheQuery } from '../../../okhttp3/internal/dns/RealDnsCache$CacheQuery.d.ts'
export class RealDnsCache$InFlightCall extends Object {
    constructor(query: DnsQuery, sentAt: ComparableTimeMark, queries: RealDnsCache$CacheQuery[])
    readonly queries: RealDnsCache$CacheQuery[];
    readonly query: DnsQuery;
    readonly sentAt: ComparableTimeMark;
    component1(): DnsQuery;
    component2(): ComparableTimeMark;
    component3(): RealDnsCache$CacheQuery[];
    copy(query: DnsQuery, sentAt: ComparableTimeMark, queries: RealDnsCache$CacheQuery[]): RealDnsCache$InFlightCall;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}