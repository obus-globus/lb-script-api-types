import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Rotation } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
/**
 * Sends an additional rotation packet.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleIdPredict.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleIdPredict.kt:61}
 */
export class SubmoduleIdPredict$Rotate extends ToggleableValueGroup {
    static INSTANCE: SubmoduleIdPredict$Rotate;
    readonly back: boolean;
    oldRotation: Rotation | null;
    rotateBack(): void;
    sendRotation(rotation: Rotation): void;
}