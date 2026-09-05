import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
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
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class ChunkScanner extends Object implements EventListener, MinecraftShortcuts {
    static INSTANCE: ChunkScanner;
    // private chunkLoadHandler: EventHook<ChunkLoadEvent>;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private dispatcher: CoroutineDispatcher;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    // private loadedChunks: (Object | null)[];
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    // private packetHandler: EventHook<PacketEvent>;
    readonly player: LocalPlayer;
    readonly running: boolean;
    readonly scope: CoroutineScope;
    // private subscribers: ChunkScanner$BlockChangeSubscriber[];
    // private threadLocalBlockPos: ThreadLocal<BlockPos$MutableBlockPos>;
    readonly world: ClientLevel;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private worldJob: CompletableJob;
    /**
     * Cancel all existing enqueue(emit) jobs and scanner jobs
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/ChunkScanner.kt#L158 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/ChunkScanner.kt:158}
     */
    cancelCurrentJobs(): void;
    children(): EventListener[];
    parent(): EventListener | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private scanChunkSections(chunk: LevelChunk, action: (param0: BlockPos, param1: BlockState) => void, $completion: Continuation<void>): any;
    stopThread(): void;
    subscribe(newSubscriber: ChunkScanner$BlockChangeSubscriber): void;
    unregister(): void;
    unsubscribe(oldSubscriber: ChunkScanner$BlockChangeSubscriber): void;
}