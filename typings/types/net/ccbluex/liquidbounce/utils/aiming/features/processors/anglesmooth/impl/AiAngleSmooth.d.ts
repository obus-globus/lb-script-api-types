import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { TwoDimensionalRegressionModel } from '../../../../../../../../../net/ccbluex/liquidbounce/deeplearn/models/TwoDimensionalRegressionModel.d.ts'
import type { RotationTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { AngleSmooth } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/AngleSmooth.d.ts'
import type { AiAngleSmooth$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/AiAngleSmooth$Companion.d.ts'
import type { AiAngleSmooth$OutputMultiplier } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/AiAngleSmooth$OutputMultiplier.d.ts'
/**
 * Record using
 * - {@link net.ccbluex.liquidbounce.features.module.modules.misc.debugrecorder.modes.DebugCombatRecorder}
 * - {@link net.ccbluex.liquidbounce.features.module.modules.misc.debugrecorder.modes.DebugCombatTrainerRecorder}
 * and then train a model - after that you will be able to use it with
 * {@link net.ccbluex.liquidbounce.utils.aiming.features.processors.anglesmooth.impl.AiAngleSmooth}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/AiAngleSmooth.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/AiAngleSmooth.kt:53}
 */
export class AiAngleSmooth extends AngleSmooth {
    static Companion: AiAngleSmooth$Companion;
    constructor(parent: ModeValueGroup<any>, fallback: AngleSmooth)
    // private choices: ModeValueGroup<TwoDimensionalRegressionModel>;
    // private correctionMode: ModeValueGroup<AngleSmooth>;
    readonly fallback: AngleSmooth;
    // private outputMultiplier: AiAngleSmooth$OutputMultiplier;
    calculateTicks(currentRotation: Rotation, targetRotation: Rotation): number;
    process(rotationTarget: RotationTarget, currentRotation: Rotation, targetRotation: Rotation): Rotation;
}