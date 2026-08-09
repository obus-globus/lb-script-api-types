import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { SneakHeights } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/SneakHeights.d.ts'
import type { EntityDimensions } from '../../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { Pose } from '../../../../../../../net/minecraft/world/entity/Pose.d.ts'
/**
 * Prevents pose changes for low version of server protocol
 *
 * @see MixinEntity
 * @see MixinPlayer
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPose.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPose.kt:38}
 */
export class ModuleNoPose extends ClientModule {
    static INSTANCE: ModuleNoPose;
    readonly noSwim: boolean;
    readonly sneakHeightChoice: SneakHeights;
    /**
     * Returns an instance of `EntityDimensions` if this module is enabled
     * and the sneak setting is modified
     *
     * @returns `@Nullable EntityDimensions`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPose.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPose.kt:54}
     */
    modifySneakHeight(): EntityDimensions | null;
    shouldCancelPose(pose: Pose): boolean;
}