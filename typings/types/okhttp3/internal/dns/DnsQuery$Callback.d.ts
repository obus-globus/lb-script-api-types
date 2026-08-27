import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DnsMessage } from '../../../okhttp3/internal/dns/DnsMessage.d.ts'
export interface DnsQuery$Callback extends Object{
    onFailure(e: IOException): void;
    onResponse(dnsResponse: DnsMessage): void;
}