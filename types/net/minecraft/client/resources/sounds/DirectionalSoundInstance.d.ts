import type { Camera } from '../../../../../net/minecraft/client/Camera.d.ts'
import type { AbstractTickableSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractTickableSoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
export class DirectionalSoundInstance extends AbstractTickableSoundInstance {
    static EMPTY_SOUND: Identifier;
    constructor(event: SoundEvent, source: SoundSource, random: RandomSource, camera: Camera, xAngle: number, yAngle: number)
    // private camera: Camera;
    // private xAngle: number;
    // private yAngle: number;
    // private setPosition(): void;
    tick(): void;
}