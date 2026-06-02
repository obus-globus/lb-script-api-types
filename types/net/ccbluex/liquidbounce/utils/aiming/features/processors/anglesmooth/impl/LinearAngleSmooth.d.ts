import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { RotationTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { FactorAngleSmooth } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/FactorAngleSmooth.d.ts'
import type { Vec2 } from '../../../../../../../../../net/minecraft/world/phys/Vec2.d.ts'
export class LinearAngleSmooth extends FactorAngleSmooth {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>, horizontalTurnSpeed: ClosedFloatingPointRange<number>, verticalTurnSpeed: ClosedFloatingPointRange<number>)
    // private horizontalTurnSpeed: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getHorizontalTurnSpeed(): ClosedFloatingPointRange<number>;
    // private verticalTurnSpeed: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getVerticalTurnSpeed(): ClosedFloatingPointRange<number>;
    calculateFactors(rotationTarget: RotationTarget | null, currentRotation: Rotation, targetRotation: Rotation): Vec2;
}