import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * Just some visuals.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals.kt#L116 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals.kt:116}
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