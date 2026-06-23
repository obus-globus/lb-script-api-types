import type { Pair } from '../../../../../../../../../kotlin/Pair.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { RotationTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationDelta } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/RotationDelta.d.ts'
import type { AngleSmooth } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/AngleSmooth.d.ts'
import type { AccelerationAngleSmooth$AccelerationError } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/AccelerationAngleSmooth$AccelerationError.d.ts'
import type { AccelerationAngleSmooth$ConstantError } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/AccelerationAngleSmooth$ConstantError.d.ts'
import type { AccelerationAngleSmooth$DynamicAccel } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/AccelerationAngleSmooth$DynamicAccel.d.ts'
import type { AccelerationAngleSmooth$ErrorProvider } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/AccelerationAngleSmooth$ErrorProvider.d.ts'
import type { AccelerationAngleSmooth$SigmoidDeceleration } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/AccelerationAngleSmooth$SigmoidDeceleration.d.ts'
import type { Vec2 } from '../../../../../../../../../net/minecraft/world/phys/Vec2.d.ts'
export class AccelerationAngleSmooth extends AngleSmooth {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private accelerationError: AccelerationAngleSmooth$AccelerationError;
    // private constantError: AccelerationAngleSmooth$ConstantError;
    // private dynamicAcceleration: AccelerationAngleSmooth$DynamicAccel;
    // private /*not mapped: */ getErrorProviders(): Pair<AccelerationAngleSmooth$ErrorProvider, AccelerationAngleSmooth$ErrorProvider>;
    // private pitchAcceleration: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getPitchAcceleration(): ClosedFloatingPointRange<number>;
    // private sigmoidDeceleration: AccelerationAngleSmooth$SigmoidDeceleration;
    // private yawAcceleration: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getYawAcceleration(): ClosedFloatingPointRange<number>;
    // private calculateAcceleration(yawDiff: number, prevYawDiff: number, dynamicYawAccel: ClosedFloatingPointRange<number>, yawDecelerationFactor: number): number;
    calculateTicks(currentRotation: Rotation, targetRotation: Rotation): number;
    // private computeTurnSpeed(prevDiff: RotationDelta, diff: RotationDelta, crosshair: boolean, distance: number): Vec2;
    process(rotationTarget: RotationTarget, currentRotation: Rotation, targetRotation: Rotation): Rotation;
}