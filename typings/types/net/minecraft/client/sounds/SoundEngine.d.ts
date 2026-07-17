import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { DeviceList } from '../../../../com/mojang/blaze3d/audio/DeviceList.d.ts'
import type { DeviceTracker } from '../../../../com/mojang/blaze3d/audio/DeviceTracker.d.ts'
import type { Library } from '../../../../com/mojang/blaze3d/audio/Library.d.ts'
import type { Listener } from '../../../../com/mojang/blaze3d/audio/Listener.d.ts'
import type { ListenerTransform } from '../../../../com/mojang/blaze3d/audio/ListenerTransform.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { Options } from '../../../../net/minecraft/client/Options.d.ts'
import type { Sound } from '../../../../net/minecraft/client/resources/sounds/Sound.d.ts'
import type { SoundInstance } from '../../../../net/minecraft/client/resources/sounds/SoundInstance.d.ts'
import type { TickableSoundInstance } from '../../../../net/minecraft/client/resources/sounds/TickableSoundInstance.d.ts'
import type { ChannelAccess } from '../../../../net/minecraft/client/sounds/ChannelAccess.d.ts'
import type { ChannelAccess$ChannelHandle } from '../../../../net/minecraft/client/sounds/ChannelAccess$ChannelHandle.d.ts'
import type { SoundBufferLibrary } from '../../../../net/minecraft/client/sounds/SoundBufferLibrary.d.ts'
import type { SoundBufferLibrary$DebugOutput } from '../../../../net/minecraft/client/sounds/SoundBufferLibrary$DebugOutput.d.ts'
import type { SoundEngine$PlayResult } from '../../../../net/minecraft/client/sounds/SoundEngine$PlayResult.d.ts'
import type { SoundEngineExecutor } from '../../../../net/minecraft/client/sounds/SoundEngineExecutor.d.ts'
import type { SoundEventListener } from '../../../../net/minecraft/client/sounds/SoundEventListener.d.ts'
import type { SoundManager } from '../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Resource } from '../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceProvider } from '../../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
import type { SoundSource } from '../../../../net/minecraft/sounds/SoundSource.d.ts'
export class SoundEngine extends Object {
    static MISSING_SOUND: string;
    static OPEN_AL_SOFT_PREFIX: string;
    static OPEN_AL_SOFT_PREFIX_LENGTH: number;
    constructor(soundManager: SoundManager, options: Options, resourceProvider: (param0: Identifier) => Optional<Resource>)
    // private channelAccess: ChannelAccess;
    // private deviceTracker: DeviceTracker;
    // private executor: SoundEngineExecutor;
    // private gainBySource: JavaMap<any, any>;
    // private instanceBySource: Multimap<SoundSource, SoundInstance>;
    // private instanceToChannel: JavaMap<SoundInstance, ChannelAccess$ChannelHandle>;
    // private lastSeenDevices: DeviceList;
    // private library: Library;
    // private listener: Listener;
    // private listeners: SoundEventListener[];
    // private loaded: boolean;
    // private options: Options;
    // private preloadQueue: Sound[];
    // private queuedSounds: JavaMap<SoundInstance, number>;
    // private queuedTickableSounds: TickableSoundInstance[];
    // private soundBuffers: SoundBufferLibrary;
    // private soundDeleteTime: JavaMap<SoundInstance, number>;
    // private soundManager: SoundManager;
    // private tickCount: number;
    // private tickingSounds: TickableSoundInstance[];
    addEventListener(listener: SoundEventListener): void;
    // private calculatePitch(instance: SoundInstance): number;
    // private calculateVolume(volume: number, source: SoundSource): number;
    // private calculateVolume(instance: SoundInstance): number;
    destroy(): void;
    emergencyShutdown(): void;
    getAvailableSoundDevices(): string[];
    getChannelDebugString(): string;
    getListenerTransform(): ListenerTransform;
    getSoundCacheDebugStats(output: SoundBufferLibrary$DebugOutput): void;
    isActive(instance: SoundInstance): boolean;
    // private loadLibrary(): void;
    pauseAllExcept(...ignoredSources: SoundSource[]): void;
    play(instance: SoundInstance): SoundEngine$PlayResult;
    playDelayed(instance: SoundInstance, delay: number): void;
    queueTickingSound(tickableSoundInstance: TickableSoundInstance): void;
    refreshCategoryVolume(source: SoundSource): void;
    reload(): void;
    removeEventListener(listener: SoundEventListener): void;
    requestPreload(sound: Sound): void;
    resume(): void;
    // private shouldChangeDevice(): boolean;
    stop(soundInstance: SoundInstance): void;
    stop(sound: Identifier, source: SoundSource): void;
    stopAll(): void;
    tick(paused: boolean): void;
    // private tickInGameSound(): void;
    // private tickMusicWhenPaused(): void;
    updateCategoryVolume(source: SoundSource, gain: number): void;
    updateSource(camera: Camera): void;
}