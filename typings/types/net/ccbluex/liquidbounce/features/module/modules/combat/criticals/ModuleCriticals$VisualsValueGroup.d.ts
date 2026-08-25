import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * Just some visuals.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals.kt#L116 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals.kt:116}
 */
export class ModuleCriticals$VisualsValueGroup extends ToggleableValueGroup {
    static INSTANCE: ModuleCriticals$VisualsValueGroup;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private critical: number;
    // private /*not mapped: */ getCritical(): number;
    readonly fake: boolean;
    // private magic: number;
    // private /*not mapped: */ getMagic(): number;
    showCriticals(entity: Entity): void;
}