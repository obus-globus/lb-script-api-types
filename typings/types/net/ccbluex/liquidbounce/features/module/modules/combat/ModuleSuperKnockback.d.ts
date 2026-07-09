import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { AttackEntityEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleSuperKnockback$Conditions } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleSuperKnockback$Conditions.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * SuperKnockback module
 *
 * Increases knockback dealt to other entities.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleSuperKnockback.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleSuperKnockback.kt:54}
 */
export class ModuleSuperKnockback extends ClientModule {
    static INSTANCE: ModuleSuperKnockback;
    readonly chance: number;
    // private conditions: ModuleSuperKnockback$Conditions[];
    // private /*not mapped: */ getConditions(): ModuleSuperKnockback$Conditions[];
    readonly hurtTime: number;
    readonly modes: ModeValueGroup<Mode>;
    // private shouldOperate(target: Entity): boolean;
    // private shouldStopSprinting(event: AttackEntityEvent): boolean;
}