import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModulePotionSpoof$StatusEffectValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModulePotionSpoof$StatusEffectValueGroup.d.ts'
/**
 * PotionSpoof
 *
 * Allows the player to have potion effects without actually having the potion.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModulePotionSpoof.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModulePotionSpoof.kt:37}
 */
export class ModulePotionSpoof extends ClientModule {
    static INSTANCE: ModulePotionSpoof;
    // private statusEffectValues: ModulePotionSpoof$StatusEffectValueGroup[];
    // private tickHandler: EventHook<PlayerTickEvent>;
    onDisabled(): void;
}