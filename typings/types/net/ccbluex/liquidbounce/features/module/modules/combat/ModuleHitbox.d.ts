import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EntityMarginEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/EntityMarginEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Hitbox module
 *
 * Enlarges the hitbox of other entities.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleHitbox.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleHitbox.kt:32}
 */
export class ModuleHitbox extends ClientModule {
    static INSTANCE: ModuleHitbox;
    /**
     * Apply to {@link net.minecraft.world.item.component.AttackRange.hitboxMargin}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleHitbox.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleHitbox.kt:41}
     */
    readonly applyToComponent: boolean;
    readonly applyToDebugHitbox: boolean;
    // private marginHandler: EventHook<EntityMarginEvent>;
    readonly size: number;
}