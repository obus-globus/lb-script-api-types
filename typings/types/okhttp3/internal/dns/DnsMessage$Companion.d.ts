import type { Object } from '../../../java/lang/Object.d.ts'
import type { DnsMessage } from '../../../okhttp3/internal/dns/DnsMessage.d.ts'
import type { Question } from '../../../okhttp3/internal/dns/Question.d.ts'
import type { ResourceRecord } from '../../../okhttp3/internal/dns/ResourceRecord.d.ts'
export class DnsMessage$Companion extends Object {
    query(question: Question): DnsMessage;
    response(id: number, questions: Question[], answers: ResourceRecord[]): DnsMessage;
}