import type { Runnable } from '../../../../../../../../../java/lang/Runnable.d.ts'
import type { ExecutorService } from '../../../../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../../../../../java/util/concurrent/Future.d.ts'
import type { BooleanSupplier } from '../../../../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventListener } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
/**
 * Catches events that should start a new place or break action.
 *
 * This is basically the managing class of the crystal aura.
 *
 * Mixins: {@link MixinClientPacketListener}, {@link MixinMultiPlayerGameMode}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt:49}
 */
export class CrystalAuraTriggerer extends ValueGroup implements EventListener, MinecraftShortcuts {
    static INSTANCE: CrystalAuraTriggerer;
    // private canCache: () => boolean;
    // private currentDestroyTask: Future<Object> | null;
    // private currentPlaceTask: Future<Object> | null;
    // private notWhileUsingItem: boolean;
    // private /*not mapped: */ getNotWhileUsingItem(): boolean;
    /**
     * Runs the calculations on a separate thread avoiding overhead on the render thread.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt:57}
     */
    readonly offThread: boolean;
    /**
     * Also pauses when the combat manager tells combat modules to pause or option
     * (e.g. {@link notWhileUsingItem}) require it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt#L152 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt:152}
     */
    readonly running: boolean;
    // private service: ExecutorService;
    /**
     * We should not cache if the calculation is done off-tread because the cache gets cleared on tick,
     * that means calculation which runs on a separate thread could run parallel to the clearing.
     *
     * Additionally, the caching is not needed if the calculation is multithreaded and therefore already has no
     * performance impact on the render thread.
     *
     * Event triggers don't normally allow caching either because between clearing and the next execution could be
     * almost a whole tick leading to wrong data when, for example, entities moved.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt#L146 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt:146}
     */
    canCache(): boolean;
    children(): EventListener[];
    parent(): EventListener | null;
    runDestroy(runnable: () => void): void;
    runPlace(runnable: () => void): void;
    terminateRunningTasks(): void;
    unregister(): void;
}