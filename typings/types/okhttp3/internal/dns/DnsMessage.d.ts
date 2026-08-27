import type { Object } from '../../../java/lang/Object.d.ts'
import type { DnsMessage$Companion } from '../../../okhttp3/internal/dns/DnsMessage$Companion.d.ts'
import type { Question } from '../../../okhttp3/internal/dns/Question.d.ts'
import type { ResourceRecord } from '../../../okhttp3/internal/dns/ResourceRecord.d.ts'
export class DnsMessage extends Object {
    static Companion: DnsMessage$Companion;
    constructor(id: number, flags: number, questions: Question[], answers: ResourceRecord[], authorityRecords: ResourceRecord[], additionalRecords: ResourceRecord[])
    readonly additionalRecords: ResourceRecord[];
    readonly answers: ResourceRecord[];
    readonly authorityRecords: ResourceRecord[];
    readonly flags: number;
    readonly id: number;
    readonly questions: Question[];
    readonly responseCode: number;
    component1(): number;
    component2(): number;
    component3(): Question[];
    component4(): ResourceRecord[];
    component5(): ResourceRecord[];
    component6(): ResourceRecord[];
    copy(id: number, flags: number, questions: Question[], answers: ResourceRecord[], authorityRecords: ResourceRecord[], additionalRecords: ResourceRecord[]): DnsMessage;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}