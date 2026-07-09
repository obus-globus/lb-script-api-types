import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * Criticals module
 *
 * Automatically crits every time you attack someone.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals.kt:54}
 */
export class ModuleCriticals extends ClientModule {
    static INSTANCE: ModuleCriticals;
    readonly modes: ModeValueGroup<Mode>;
    allowsCriticalHit(ignoreOnGround: boolean): boolean;
    canDoCriticalHit(ignoreOnGround: boolean, ignoreSprint: boolean): boolean;
    shouldWaitForCrit(target: Entity, ignoreState: boolean): boolean;
    wouldDoCriticalHit(ignoreSprint: boolean): boolean;
}