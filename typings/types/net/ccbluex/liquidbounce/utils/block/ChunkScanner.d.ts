import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CompletableJob } from '../../../../../kotlinx/coroutines/CompletableJob.d.ts'
import type { CoroutineDispatcher } from '../../../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { CoroutineScope } from '../../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { ChunkLoadEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ChunkLoadEvent.d.ts'
import type { PacketEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { ChunkScanner$BlockChangeSubscriber } from '../../../../../net/ccbluex/liquidbounce/utils/block/ChunkScanner$BlockChangeSubscriber.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class ChunkScanner extends Object implements EventListener, MinecraftShortcuts {
    static INSTANCE: ChunkScanner;
    // private chunkLoadHandler: EventHook<ChunkLoadEvent>;
    // private dispatcher: CoroutineDispatcher;
    // private loadedChunks: (Object | null)[];
    // private packetHandler: EventHook<PacketEvent>;
    readonly scope: CoroutineScope;
    // private subscribers: ChunkScanner$BlockChangeSubscriber[];
    // private threadLocalBlockPos: ThreadLocal<BlockPos$MutableBlockPos>;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private worldJob: CompletableJob;
    /**
     * Cancel all existing enqueue(emit) jobs and scanner jobs
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/ChunkScanner.kt#L158 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/ChunkScanner.kt:158}
     */
    cancelCurrentJobs(): void;
    children(): EventListener[];
    parent(): EventListener | null;
    // private scanChunkSections(chunk: LevelChunk, action: (param0: BlockPos, param1: BlockState) => void): void;
    stopThread(): void;
    subscribe(newSubscriber: ChunkScanner$BlockChangeSubscriber): void;
    unregister(): void;
    unsubscribe(oldSubscriber: ChunkScanner$BlockChangeSubscriber): void;
}