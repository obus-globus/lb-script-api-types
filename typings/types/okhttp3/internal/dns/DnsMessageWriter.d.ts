import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DnsMessage } from '../../../okhttp3/internal/dns/DnsMessage.d.ts'
import type { Question } from '../../../okhttp3/internal/dns/Question.d.ts'
import type { ResourceRecord } from '../../../okhttp3/internal/dns/ResourceRecord.d.ts'
import type { ResourceRecord$Https } from '../../../okhttp3/internal/dns/ResourceRecord$Https.d.ts'
import type { ResourceRecord$IpAddress } from '../../../okhttp3/internal/dns/ResourceRecord$IpAddress.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class DnsMessageWriter extends Object {
    constructor(sink: Buffer)
    // private labelToOffset: JavaMap<ByteString, number>;
    // private messageStart: number;
    // private sink: Buffer;
    write(message: DnsMessage): void;
    // private writeHttps(record: ResourceRecord$Https): void;
    // private writeIpAddress(record: ResourceRecord$IpAddress): void;
    // private writeQuestion(question: Question): void;
    // private writeResourceRecord(resourceRecord: ResourceRecord): void;
}