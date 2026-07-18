import type { RoutingPath$Companion } from '../../../../io/ktor/server/routing/RoutingPath$Companion.d.ts'
import type { RoutingPathSegment } from '../../../../io/ktor/server/routing/RoutingPathSegment.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingPath extends Object {
    static Companion: RoutingPath$Companion;
    private constructor(parts: RoutingPathSegment[])
    readonly parts: RoutingPathSegment[];
    toString(): string;
}