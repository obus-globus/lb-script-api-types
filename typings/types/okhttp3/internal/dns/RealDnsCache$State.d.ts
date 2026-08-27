import type { Object } from '../../../java/lang/Object.d.ts'
import type { ComparableTimeMark } from '../../../kotlin/time/ComparableTimeMark.d.ts'
import type { RealDnsCache$InFlightCall } from '../../../okhttp3/internal/dns/RealDnsCache$InFlightCall.d.ts'
import type { RealDnsCache$Result } from '../../../okhttp3/internal/dns/RealDnsCache$Result.d.ts'
export class RealDnsCache$State extends Object {
    constructor(lastRequestedAt: ComparableTimeMark | null, inFlightCall: RealDnsCache$InFlightCall | null, result: RealDnsCache$Result | null)
    readonly inFlightCall: RealDnsCache$InFlightCall | null;
    readonly lastRequestedAt: ComparableTimeMark | null;
    readonly result: RealDnsCache$Result | null;
    component1(): ComparableTimeMark | null;
    component2(): RealDnsCache$InFlightCall | null;
    component3(): RealDnsCache$Result | null;
    copy(lastRequestedAt: ComparableTimeMark | null, inFlightCall: RealDnsCache$InFlightCall | null, result: RealDnsCache$Result | null): RealDnsCache$State;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}