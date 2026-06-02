import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { RoutePlanner$Plan } from '../../../okhttp3/internal/connection/RoutePlanner$Plan.d.ts'
export class RoutePlanner$ConnectResult extends Object {
    constructor(plan: RoutePlanner$Plan, nextPlan: RoutePlanner$Plan | null, throwable: Throwable | null)
    /*not mapped: */ isSuccess(): boolean;
    readonly nextPlan: RoutePlanner$Plan | null;
    readonly plan: RoutePlanner$Plan;
    readonly throwable: Throwable | null;
    component1(): RoutePlanner$Plan;
    component2(): RoutePlanner$Plan | null;
    component3(): Throwable | null;
    copy(plan: RoutePlanner$Plan, nextPlan: RoutePlanner$Plan | null, throwable: Throwable | null): RoutePlanner$ConnectResult;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}