import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
export class AccelerationAngleSmooth$ErrorProvider extends Object {
    constructor(accelerationErrorRange: ClosedFloatingPointRange<number>, constantErrorRange: ClosedFloatingPointRange<number>)
    // private accelerationErrorRange: ClosedFloatingPointRange<number>;
    // private constantErrorRange: ClosedFloatingPointRange<number>;
    getError(acceleration: number): number;
}