import type { AbstractTickableSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractTickableSoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class BiomeAmbientSoundsHandler$LoopSoundInstance extends AbstractTickableSoundInstance {
    static EMPTY_SOUND: Identifier;
    constructor(soundEvent: SoundEvent)
    // private fade: number;
    // private fadeDirection: number;
    fadeIn(): void;
    fadeOut(): void;
    tick(): void;
}