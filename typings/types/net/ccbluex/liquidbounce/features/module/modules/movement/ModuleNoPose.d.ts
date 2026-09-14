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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPose.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPose.kt:38}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPose.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPose.kt:54}
     */
    modifySneakHeight(): EntityDimensions | null;
    shouldCancelPose(pose: Pose): boolean;
}