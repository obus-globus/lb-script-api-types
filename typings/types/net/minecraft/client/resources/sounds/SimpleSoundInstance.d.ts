import type { AbstractSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractSoundInstance.d.ts'
import type { SoundInstance$Attenuation } from '../../../../../net/minecraft/client/resources/sounds/SoundInstance$Attenuation.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SimpleSoundInstance extends AbstractSoundInstance {
    static EMPTY_SOUND: Identifier;
    static forAmbientAddition(paramsound: SoundEvent): SimpleSoundInstance;
    static forAmbientMood(paramsound: SoundEvent, paramrandom: RandomSource, paramx: number, paramy: number, paramz: number): SimpleSoundInstance;
    static forJukeboxSong(paramsound: SoundEvent, parampos: Vec3): SimpleSoundInstance;
    static forLocalAmbience(paramsound: SoundEvent, parampitch: number, paramvolume: number): SimpleSoundInstance;
    static forMusic(paramsound: SoundEvent): SimpleSoundInstance;
    static forUI(paramsound: Holder<SoundEvent>, parampitch: number): SimpleSoundInstance;
    static forUI(paramsound: SoundEvent, parampitch: number): SimpleSoundInstance;
    static forUI(paramsound: SoundEvent, parampitch: number, paramvolume: number): SimpleSoundInstance;
    constructor(location: Identifier, source: SoundSource, volume: number, pitch: number, random: RandomSource, looping: boolean, delay: number, attenuation: SoundInstance$Attenuation, x: number, y: number, z: number, relative: boolean)
    constructor(sound: SoundEvent, source: SoundSource, volume: number, pitch: number, random: RandomSource, x: number, y: number, z: number)
    constructor(sound: SoundEvent, source: SoundSource, volume: number, pitch: number, random: RandomSource, pos: BlockPos)
}