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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPose.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPose.kt:32}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPose.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPose.kt:49}
     */
    modifySneakHeight(): EntityDimensions | null;
    shouldCancelPose(pose: Pose): boolean;
}