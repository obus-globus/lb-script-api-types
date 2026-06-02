import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricSoundInstance } from '../../../../../net/fabricmc/fabric/api/client/sound/v1/FabricSoundInstance.d.ts'
import type { SoundInstanceMixin } from '../../../../../net/fabricmc/fabric/mixin/client/sound/SoundInstanceMixin.d.ts'
import type { Sound } from '../../../../../net/minecraft/client/resources/sounds/Sound.d.ts'
import type { SoundInstance$Attenuation } from '../../../../../net/minecraft/client/resources/sounds/SoundInstance$Attenuation.d.ts'
import type { AudioStream } from '../../../../../net/minecraft/client/sounds/AudioStream.d.ts'
import type { SoundBufferLibrary } from '../../../../../net/minecraft/client/sounds/SoundBufferLibrary.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { WeighedSoundEvents } from '../../../../../net/minecraft/client/sounds/WeighedSoundEvents.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
export interface SoundInstance extends Object, FabricSoundInstance, SoundInstanceMixin{
    canPlaySound(): boolean;
    canStartSilent(): boolean;
    getAttenuation(): SoundInstance$Attenuation;
    getAudioStream(arg0: SoundBufferLibrary, arg1: Identifier, arg2: boolean): CompletableFuture<AudioStream>;
    getDelay(): number;
    getIdentifier(): Identifier;
    getPitch(): number;
    getSound(): Sound;
    getSource(): SoundSource;
    getVolume(): number;
    getX(): number;
    getY(): number;
    getZ(): number;
    isLooping(): boolean;
    isRelative(): boolean;
    resolve(soundManager: SoundManager): WeighedSoundEvents;
}