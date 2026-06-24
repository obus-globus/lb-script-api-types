import type { Cache } from '../../../../../com/google/common/cache/Cache.d.ts'
import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceManagerReloadListener } from '../../../../../net/minecraft/server/packs/resources/ResourceManagerReloadListener.d.ts'
import type { SignText } from '../../../../../net/minecraft/world/level/block/entity/SignText.d.ts'
import type { SignAtlasRenderTarget } from '../../../../../net/raphimc/immediatelyfast/feature/sign_text_buffering/SignAtlasRenderTarget.d.ts'
import type { SignAtlasRenderTarget$Slot } from '../../../../../net/raphimc/immediatelyfast/feature/sign_text_buffering/SignAtlasRenderTarget$Slot.d.ts'
export class SignTextCache extends Object implements ResourceManagerReloadListener {
    constructor()
    renderType: RenderType;
    signAtlasRenderTarget: SignAtlasRenderTarget;
    signProjectionMatrix: GpuBufferSlice;
    slotCache: Cache<SignText, SignAtlasRenderTarget$Slot>;
    clearCache(): void;
    onResourceManagerReload(arg0: ResourceManager): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
}