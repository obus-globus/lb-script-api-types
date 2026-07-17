import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BiomeAmbienceInterface } from '../../../../../net/irisshaders/iris/mixinterface/BiomeAmbienceInterface.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { AmbientSoundHandler } from '../../../../../net/minecraft/client/resources/sounds/AmbientSoundHandler.d.ts'
import type { BiomeAmbientSoundsHandler$LoopSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/BiomeAmbientSoundsHandler$LoopSoundInstance.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
export class BiomeAmbientSoundsHandler extends Object implements BiomeAmbienceInterface, AmbientSoundHandler {
    constructor(player: LocalPlayer, soundManager: SoundManager)
    // private constantMoodiness: number;
    // private loopSounds: JavaMap<Holder<SoundEvent>, BiomeAmbientSoundsHandler$LoopSoundInstance>;
    readonly moodiness: number;
    // private player: LocalPlayer;
    // private previousLoopSound: Holder<SoundEvent>;
    // private random: RandomSource;
    // private soundManager: SoundManager;
    getConstantMood(): number;
    getMoodiness(): number;
    tick(): void;
}