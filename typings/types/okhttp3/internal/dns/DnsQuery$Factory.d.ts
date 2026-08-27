import type { Object } from '../../../java/lang/Object.d.ts'
import type { DnsQuery } from '../../../okhttp3/internal/dns/DnsQuery.d.ts'
import type { Question } from '../../../okhttp3/internal/dns/Question.d.ts'
export interface DnsQuery$Factory extends Object{
    newQuery(question: Question): DnsQuery;
}