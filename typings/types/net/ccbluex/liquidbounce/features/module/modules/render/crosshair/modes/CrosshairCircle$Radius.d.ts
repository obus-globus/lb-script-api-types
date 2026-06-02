import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class CrosshairCircle$Radius extends ValueGroup {
    static INSTANCE: CrosshairCircle$Radius;
    readonly dynamicRadiusMultiplier: number;
    readonly radius: ClosedFloatingPointRange<number>;
}