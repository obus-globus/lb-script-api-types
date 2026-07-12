import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { SoundEvent } from '../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { InteractionHand } from '../../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { FishingHook } from '../../../../../../../net/minecraft/world/entity/projectile/FishingHook.d.ts'
/**
 * AutoFish module
 *
 * Automatically catches fish when using a rod.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoFish.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoFish.kt:47}
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
    // private activeFishingHook(): FishingHook | null;
    // private findFishingRodHand(): InteractionHand | null;
    onDisabled(): void;
}