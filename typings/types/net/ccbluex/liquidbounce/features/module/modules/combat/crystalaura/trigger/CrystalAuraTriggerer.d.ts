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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt:42}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt:54}
     */
    readonly offThread: boolean;
    /**
     * Also pauses when the combat manager tells combat modules to pause or option
     * (e.g. {@link notWhileUsingItem}) require it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt#L148 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt:148}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt#L136 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/CrystalAuraTriggerer.kt:136}
     */
    canCache(): boolean;
    children(): EventListener[];
    parent(): EventListener | null;
    runDestroy(runnable: () => void): void;
    runPlace(runnable: () => void): void;
    terminateRunningTasks(): void;
    unregister(): void;
}