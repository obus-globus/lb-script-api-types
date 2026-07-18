import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Holder } from '../../../../../../../../net/minecraft/core/Holder.d.ts'
import type { MobEffect } from '../../../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * Criticals module
 *
 * Automatically crits every time you attack someone.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals.kt:54}
 */
export class ModuleCriticals extends ClientModule {
    static INSTANCE: ModuleCriticals;
    // private blockingEffects: Holder<MobEffect>[];
    readonly modes: ModeValueGroup<Mode>;
    allowsCriticalHit(ignoreOnGround: boolean): boolean;
    canDoCriticalHit(ignoreOnGround: boolean, ignoreSprint: boolean): boolean;
    shouldWaitForCrit(target: Entity, ignoreState: boolean): boolean;
    wouldDoCriticalHit(ignoreSprint: boolean): boolean;
}