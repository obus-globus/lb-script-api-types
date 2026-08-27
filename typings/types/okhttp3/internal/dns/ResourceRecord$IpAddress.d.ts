import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceRecord } from '../../../okhttp3/internal/dns/ResourceRecord.d.ts'
export class ResourceRecord$IpAddress extends Object implements ResourceRecord {
    constructor(name: string, timeToLive: number, address: InetAddress)
    readonly address: InetAddress;
    readonly name: string;
    readonly timeToLive: number;
    component1(): string;
    component2(): number;
    component3(): InetAddress;
    copy(name: string, timeToLive: number, address: InetAddress): ResourceRecord$IpAddress;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}