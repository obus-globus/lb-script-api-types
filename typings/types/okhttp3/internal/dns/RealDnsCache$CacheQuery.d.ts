import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DnsMessage } from '../../../okhttp3/internal/dns/DnsMessage.d.ts'
import type { DnsQuery } from '../../../okhttp3/internal/dns/DnsQuery.d.ts'
import type { DnsQuery$Callback } from '../../../okhttp3/internal/dns/DnsQuery$Callback.d.ts'
import type { DnsQuery$Factory } from '../../../okhttp3/internal/dns/DnsQuery$Factory.d.ts'
import type { Question } from '../../../okhttp3/internal/dns/Question.d.ts'
import type { RealDnsCache } from '../../../okhttp3/internal/dns/RealDnsCache.d.ts'
import type { RealDnsCache$Entry } from '../../../okhttp3/internal/dns/RealDnsCache$Entry.d.ts'
export class RealDnsCache$CacheQuery extends Object implements DnsQuery, DnsQuery$Callback {
    constructor(null_: RealDnsCache, question: Question, delegate: DnsQuery$Factory, entry: RealDnsCache$Entry)
    callback: DnsQuery$Callback | null;
    readonly delegate: DnsQuery$Factory;
    readonly entry: RealDnsCache$Entry;
    readonly question: Question;
    cancel(): void;
    enqueue(callback: DnsQuery$Callback): void;
    onFailure(e: IOException): void;
    onResponse(dnsResponse: DnsMessage): void;
}