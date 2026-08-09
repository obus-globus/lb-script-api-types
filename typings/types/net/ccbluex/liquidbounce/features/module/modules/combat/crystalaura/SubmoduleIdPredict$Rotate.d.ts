import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Rotation } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
/**
 * Sends an additional rotation packet.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleIdPredict.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleIdPredict.kt:61}
 */
export class SubmoduleIdPredict$Rotate extends ToggleableValueGroup {
    static INSTANCE: SubmoduleIdPredict$Rotate;
    readonly back: boolean;
    oldRotation: Rotation | null;
    rotateBack(): void;
    sendRotation(rotation: Rotation): void;
}