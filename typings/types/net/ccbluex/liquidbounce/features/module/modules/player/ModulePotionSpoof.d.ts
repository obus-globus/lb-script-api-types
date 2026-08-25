import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModulePotionSpoof$StatusEffectValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModulePotionSpoof$StatusEffectValueGroup.d.ts'
/**
 * PotionSpoof
 *
 * Allows the player to have potion effects without actually having the potion.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModulePotionSpoof.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModulePotionSpoof.kt:37}
 */
export class ModulePotionSpoof extends ClientModule {
    static INSTANCE: ModulePotionSpoof;
    // private statusEffectValues: ModulePotionSpoof$StatusEffectValueGroup[];
    // private tickHandler: EventHook<PlayerTickEvent>;
    onDisabled(): void;
}