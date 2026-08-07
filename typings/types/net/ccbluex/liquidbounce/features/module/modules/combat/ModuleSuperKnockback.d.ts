import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { PercentageChance } from '../../../../../../../net/ccbluex/liquidbounce/config/utils/PercentageChance.d.ts'
import type { AttackEntityEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleSuperKnockback$Conditions } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleSuperKnockback$Conditions.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * SuperKnockback module
 *
 * Increases knockback dealt to other entities.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleSuperKnockback.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleSuperKnockback.kt:55}
 */
export class ModuleSuperKnockback extends ClientModule {
    static INSTANCE: ModuleSuperKnockback;
    readonly chance: PercentageChance<number>;
    // private conditions: ModuleSuperKnockback$Conditions[];
    // private /*not mapped: */ getConditions(): ModuleSuperKnockback$Conditions[];
    readonly hurtTime: number;
    readonly modes: ModeValueGroup<Mode>;
    getModes(): ModeValueGroup<Mode>;
    // private shouldOperate(target: Entity): boolean;
    // private shouldStopSprinting(event: AttackEntityEvent): boolean;
}