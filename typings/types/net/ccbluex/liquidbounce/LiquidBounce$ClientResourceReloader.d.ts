import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PreparableReloadListener } from '../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
/**
 * Resource reloader which is executed on client start and reload.
 * This is used to run async tasks without blocking the main thread.
 *
 * For now this is only used to check for updates and request additional information from the internet.
 *
 * @see net.fabricmc.fabric.api.resource.v1.reloader.SimpleResourceReloader
 * @see PreparableReloadListener
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt#L498 | src/main/kotlin/net/ccbluex/liquidbounce/LiquidBounce.kt:498}
 */
export class LiquidBounce$ClientResourceReloader extends Object implements PreparableReloadListener {
    static INSTANCE: LiquidBounce$ClientResourceReloader;
    getName(): string;
    prepareSharedState(currentReload: PreparableReloadListener$SharedState): void;
    reload(store: PreparableReloadListener$SharedState, prepareExecutor: Executor, synchronizer: (param0: Object | null) => CompletableFuture<Object>, applyExecutor: Executor): CompletableFuture<void>;
}