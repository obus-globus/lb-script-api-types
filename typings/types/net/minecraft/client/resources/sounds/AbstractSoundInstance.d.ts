import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Sound } from '../../../../../net/minecraft/client/resources/sounds/Sound.d.ts'
import type { SoundInstance } from '../../../../../net/minecraft/client/resources/sounds/SoundInstance.d.ts'
import type { SoundInstance$Attenuation } from '../../../../../net/minecraft/client/resources/sounds/SoundInstance$Attenuation.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { WeighedSoundEvents } from '../../../../../net/minecraft/client/sounds/WeighedSoundEvents.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
export abstract class AbstractSoundInstance extends Object implements SoundInstance {
    static EMPTY_SOUND: Identifier;
    constructor(identifier: Identifier, source: SoundSource, random: RandomSource)
    constructor(event: SoundEvent, source: SoundSource, random: RandomSource)
    attenuation: SoundInstance$Attenuation;
    delay: number;
    readonly identifier: Identifier;
    looping: boolean;
    pitch: number;
    // private random: RandomSource;
    relative: boolean;
    sound: Sound;
    readonly source: SoundSource;
    volume: number;
    x: number;
    y: number;
    z: number;
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
    resolve(soundManager: SoundManager): WeighedSoundEvents;
    toString(): string;
}