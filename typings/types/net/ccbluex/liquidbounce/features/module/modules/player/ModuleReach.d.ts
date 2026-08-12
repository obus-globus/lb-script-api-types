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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleReach.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleReach.kt:33}
 */
export class ModuleReach extends ClientModule {
    static INSTANCE: ModuleReach;
    readonly blockRangeIncrease: number;
    readonly entity: RangeValueGroup;
}