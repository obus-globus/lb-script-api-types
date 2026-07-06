import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Job } from '../../../../../kotlinx/coroutines/Job.d.ts'
import type { Cosmetic } from '../../../../../net/ccbluex/liquidbounce/api/models/cosmetics/Cosmetic.d.ts'
import type { CosmeticCategory } from '../../../../../net/ccbluex/liquidbounce/api/models/cosmetics/CosmeticCategory.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { DisconnectEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/DisconnectEvent.d.ts'
import type { SessionEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/SessionEvent.d.ts'
import type { Chronometer } from '../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
/**
 * A more reliable, safer and stress reduced cosmetics service
 *
 * It will frequently update all carriers of cosmetics into a set with their MD5-hashed UUID.
 * This allows to only request cosmetics of a carrier when it is needed.
 *
 * We know this might cause sometimes users to not have their cosmetics
 * shown immediately when account switches, but we can reduce the stress
 * on the API and the connection of the user.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/cosmetic/CosmeticService.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/cosmetic/CosmeticService.kt:49}
 */
export class CosmeticService extends ValueGroup implements EventListener {
    static INSTANCE: CosmeticService;
    // private REFRESH_DELAY: number;
    // private carriers: string[];
    /*not mapped: */ getCarriers$net_ccbluex_liquidbounce(): string[];
    // private carriersCosmetics: Map<UUID, Cosmetic[]>;
    /*not mapped: */ getCarriersCosmetics$net_ccbluex_liquidbounce(): Map<UUID, Cosmetic[]>;
    // private disconnectHandler: EventHook<DisconnectEvent>;
    // private lastUpdate: Chronometer;
    // private logger: Logger;
    // private sessionHandler: EventHook<SessionEvent>;
    // private task: Job | null;
    children(): EventListener[];
    fetchCosmetic(uuid: UUID, category: CosmeticCategory, done: (param0: Cosmetic) => void): void;
    // private getCosmetic(uuid: UUID, category: CosmeticCategory): Cosmetic | null;
    hasCosmetic(uuid: UUID, category: CosmeticCategory): boolean;
    parent(): EventListener | null;
    /**
     * Refresh cosmetic carriers if needed from the API in a MD5-hashed UUID set
     * and then call out {@link done}.
     * It will only refresh when the REFRESH_DELAY has passed or when {@link force} is true.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/cosmetic/CosmeticService.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/features/cosmetic/CosmeticService.kt:71}
     */
    refreshCarriers(force: boolean, done: () => void): void;
    // private transferTemporaryOwnership(uuid: UUID): void;
    unregister(): void;
}