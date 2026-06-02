import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ExpirationPolicy } from '../../../net/jodah/expiringmap/ExpirationPolicy.d.ts'
export class ExpiringValue<V extends Object | number | string | boolean> extends Object {
    constructor(arg0: V)
    constructor(arg0: V, arg1: number, arg2: TimeUnit)
    private constructor(arg0: V, arg1: number, arg2: TimeUnit, arg3: ExpirationPolicy)
    constructor(arg0: V, arg1: ExpirationPolicy)
    constructor(arg0: V, arg1: ExpirationPolicy, arg2: number, arg3: TimeUnit)
    readonly duration: number;
    readonly expirationPolicy: ExpirationPolicy;
    readonly timeUnit: TimeUnit;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    getDuration(): number;
    getExpirationPolicy(): ExpirationPolicy;
    getTimeUnit(): TimeUnit;
    getValue(): V;
    hashCode(): number;
    toString(): string;
}