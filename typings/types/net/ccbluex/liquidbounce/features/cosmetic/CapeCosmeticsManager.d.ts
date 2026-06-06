import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cosmetic } from '../../../../../net/ccbluex/liquidbounce/api/models/cosmetics/Cosmetic.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { DisconnectEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/DisconnectEvent.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
/**
 * A cape cosmetic manager
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/cosmetic/CapeCosmeticsManager.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/cosmetic/CapeCosmeticsManager.kt:38}
 */
export class CapeCosmeticsManager extends Object implements EventListener {
    static INSTANCE: CapeCosmeticsManager;
    // private cachedCapes: { [key: string]: Identifier };
    // private disconnectHandler: EventHook<DisconnectEvent>;
    // private logger: Logger;
    children(): EventListener[];
    // private getCapeName(cosmetic: Cosmetic): string | null;
    /**
     * Loads a player cape
     *
     * @param player The player to load the cape for
     * @param callback The callback to call with the cape texture identifier
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/cosmetic/CapeCosmeticsManager.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/cosmetic/CapeCosmeticsManager.kt:55}
     */
    loadPlayerCape(player: GameProfile, callback: (param0: Identifier) => void): void;
    parent(): EventListener | null;
    unregister(): void;
}