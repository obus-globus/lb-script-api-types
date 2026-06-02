import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { SoundEvent } from '../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
/**
 * AutoFish module
 *
 * Automatically catches fish when using a rod.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoFish.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoFish.kt:39}
 */
export class ModuleAutoFish extends ClientModule {
    static INSTANCE: ModuleAutoFish;
    // private caughtFish: boolean;
    // private packetHandler: EventHook<PacketEvent>;
    // private reelDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getReelDelay(): { start: number; endInclusive: number; step: number };
    // private sounds: SoundEvent[];
    // private /*not mapped: */ getSounds(): SoundEvent[];
    // private tickHandler: EventHook<GameTickEvent>;
    onDisabled(): void;
}