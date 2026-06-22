import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Sound } from '../../../../../net/minecraft/client/resources/sounds/Sound.d.ts'
import type { SoundInstance } from '../../../../../net/minecraft/client/resources/sounds/SoundInstance.d.ts'
import type { SoundInstance$Attenuation } from '../../../../../net/minecraft/client/resources/sounds/SoundInstance$Attenuation.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { WeighedSoundEvents } from '../../../../../net/minecraft/client/sounds/WeighedSoundEvents.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
export interface TickableSoundInstance extends Object, SoundInstance{
    canPlaySound(): boolean;
    canStartSilent(): boolean;
    getAttenuation(): SoundInstance$Attenuation;
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
    isStopped(): boolean;
    resolve(soundManager: SoundManager): WeighedSoundEvents;
    tick(): void;
}