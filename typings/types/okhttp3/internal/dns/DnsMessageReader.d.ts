import type { Object } from '../../../java/lang/Object.d.ts'
import type { DnsMessage } from '../../../okhttp3/internal/dns/DnsMessage.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
export class DnsMessageReader extends Object {
    constructor(source: BufferedSource)
    // private source: BufferedSource;
    // private sourceOffsetZero: BufferedSource;
    read(): DnsMessage;
}