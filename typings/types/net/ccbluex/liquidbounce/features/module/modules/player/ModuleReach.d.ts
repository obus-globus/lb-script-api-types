import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RangeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/range/RangeValueGroup.d.ts'
/**
 * Reach module
 *
 * Increases your reach.
 *
 * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.entity.MixinPlayer
 * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.item.MixinAttackRange
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleReach.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleReach.kt:25}
 */
export class ModuleReach extends ClientModule {
    static INSTANCE: ModuleReach;
    readonly blockRangeIncrease: number;
    readonly entity: RangeValueGroup;
}