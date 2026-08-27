import type { Object } from '../../../java/lang/Object.d.ts'
import type { DnsQuery$Callback } from '../../../okhttp3/internal/dns/DnsQuery$Callback.d.ts'
export interface DnsQuery extends Object{
    cancel(): void;
    enqueue(callback: DnsQuery$Callback): void;
}