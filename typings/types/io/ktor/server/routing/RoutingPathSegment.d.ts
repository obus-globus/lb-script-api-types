import type { RoutingPathSegmentKind } from '../../../../io/ktor/server/routing/RoutingPathSegmentKind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingPathSegment extends Object {
    constructor(value: string, kind: RoutingPathSegmentKind)
    readonly kind: RoutingPathSegmentKind;
    readonly value: string;
    component1(): string;
    component2(): RoutingPathSegmentKind;
    copy(value: string, kind: RoutingPathSegmentKind): RoutingPathSegment;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}