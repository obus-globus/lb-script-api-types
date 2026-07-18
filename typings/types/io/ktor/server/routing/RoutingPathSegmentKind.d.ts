import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RoutingPathSegmentKind extends Enum<RoutingPathSegmentKind> {
    static Constant: RoutingPathSegmentKind;
    static Parameter: RoutingPathSegmentKind;
    static getEntries(): RoutingPathSegmentKind[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): RoutingPathSegmentKind;
    static values(): RoutingPathSegmentKind[];
    private constructor()
    name(): "Constant" | "Parameter";
}