import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceRecord } from '../../../okhttp3/internal/dns/ResourceRecord.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class ResourceRecord$Https extends Object implements ResourceRecord {
    constructor(name: string, timeToLive: number, priority: number, targetName: string, alpnIds: string[] | null, port: number, ipAddressHints: InetAddress[], echConfigList: ByteString | null)
    readonly alpnIds: string[] | null;
    readonly echConfigList: ByteString | null;
    readonly ipAddressHints: InetAddress[];
    readonly name: string;
    port: number;
    readonly priority: number;
    readonly targetName: string;
    readonly timeToLive: number;
    component1(): string;
    component2(): number;
    component3(): number;
    component4(): string;
    component5(): string[] | null;
    component6(): number;
    component7(): InetAddress[];
    component8(): ByteString | null;
    copy(name: string, timeToLive: number, priority: number, targetName: string, alpnIds: string[] | null, port: number, ipAddressHints: InetAddress[], echConfigList: ByteString | null): ResourceRecord$Https;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}