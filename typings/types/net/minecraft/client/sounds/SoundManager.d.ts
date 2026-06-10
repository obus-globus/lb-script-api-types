import type { ListenerTransform } from '../../../../com/mojang/blaze3d/audio/ListenerTransform.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricResourceReloader } from '../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { Options } from '../../../../net/minecraft/client/Options.d.ts'
import type { Sound } from '../../../../net/minecraft/client/resources/sounds/Sound.d.ts'
import type { SoundInstance } from '../../../../net/minecraft/client/resources/sounds/SoundInstance.d.ts'
import type { TickableSoundInstance } from '../../../../net/minecraft/client/resources/sounds/TickableSoundInstance.d.ts'
import type { SoundBufferLibrary$DebugOutput } from '../../../../net/minecraft/client/sounds/SoundBufferLibrary$DebugOutput.d.ts'
import type { SoundEngine } from '../../../../net/minecraft/client/sounds/SoundEngine.d.ts'
import type { SoundEngine$PlayResult } from '../../../../net/minecraft/client/sounds/SoundEngine$PlayResult.d.ts'
import type { SoundEventListener } from '../../../../net/minecraft/client/sounds/SoundEventListener.d.ts'
import type { SoundManager$Preparations } from '../../../../net/minecraft/client/sounds/SoundManager$Preparations.d.ts'
import type { WeighedSoundEvents } from '../../../../net/minecraft/client/sounds/WeighedSoundEvents.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { Resource } from '../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceManager } from '../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimplePreparableReloadListener } from '../../../../net/minecraft/server/packs/resources/SimplePreparableReloadListener.d.ts'
import type { SoundSource } from '../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export class SoundManager extends SimplePreparableReloadListener<SoundManager$Preparations> implements FabricResourceReloader {
    static EMPTY_SOUND: Sound;
    static EMPTY_SOUND_LOCATION: Identifier;
    static INTENTIONALLY_EMPTY_SOUND: Sound;
    static INTENTIONALLY_EMPTY_SOUND_EVENT: WeighedSoundEvents;
    static INTENTIONALLY_EMPTY_SOUND_LOCATION: Identifier;
    constructor(options: Options)
    // private fabric$id: Identifier;
    // private registry: Map<Identifier, WeighedSoundEvents>;
    // private soundCache: Map<Identifier, Resource>;
    // private soundEngine: SoundEngine;
    addListener(listener: SoundEventListener): void;
    apply(preparations: SoundManager$Preparations, manager: ResourceManager, profiler: ProfilerFiller): void;
    destroy(): void;
    emergencyShutdown(): void;
    fabric$getId(): Identifier;
    getAvailableSoundDevices(): string[];
    getAvailableSounds(): Identifier[];
    getChannelDebugString(): string;
    getListenerTransform(): ListenerTransform;
    getName(): string;
    getSoundCacheDebugStats(output: SoundBufferLibrary$DebugOutput): void;
    getSoundEvent(location: Identifier): WeighedSoundEvents;
    isActive(instance: SoundInstance): boolean;
    pauseAllExcept(ignoredSources: SoundSource[]): void;
    play(instance: SoundInstance): SoundEngine$PlayResult;
    playDelayed(instance: SoundInstance, delay: number): void;
    prepare(manager: ResourceManager, profiler: ProfilerFiller): SoundManager$Preparations;
    queueTickingSound(instance: TickableSoundInstance): void;
    refreshCategoryVolume(category: SoundSource): void;
    reload(): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
    removeListener(listener: SoundEventListener): void;
    resume(): void;
    stop(): void;
    stop(soundInstance: SoundInstance): void;
    stop(sound: Identifier, source: SoundSource): void;
    tick(paused: boolean): void;
    updateCategoryVolume(source: SoundSource, gain: number): void;
    updateSource(camera: Camera): void;
}