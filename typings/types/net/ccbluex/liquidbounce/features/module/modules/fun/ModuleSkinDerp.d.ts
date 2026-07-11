import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleSkinDerp$DerpParts } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/ModuleSkinDerp$DerpParts.d.ts'
import type { PlayerModelPart } from '../../../../../../../net/minecraft/world/entity/player/PlayerModelPart.d.ts'
/**
 * Skin Derp module
 *
 * Makes your skin blink (Requires multi-layer skin).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleSkinDerp.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleSkinDerp.kt:34}
 */
export class ModuleSkinDerp extends ClientModule {
    static INSTANCE: ModuleSkinDerp;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    // private parts: ModuleSkinDerp$DerpParts[];
    // private /*not mapped: */ getParts(): ModuleSkinDerp$DerpParts[];
    // private prevModelParts: PlayerModelPart[];
    readonly repeatable: EventHook<GameTickEvent>;
    // private sync: boolean;
    // private /*not mapped: */ getSync(): boolean;
    onDisabled(): void;
    onEnabled(): void;
}