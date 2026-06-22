import type { AbstractSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractSoundInstance.d.ts'
import type { TickableSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/TickableSoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
export abstract class AbstractTickableSoundInstance extends AbstractSoundInstance implements TickableSoundInstance {
    static EMPTY_SOUND: Identifier;
    constructor(event: SoundEvent, source: SoundSource, random: RandomSource)
    readonly stopped: boolean;
    isStopped(): boolean;
    stop(): void;
    tick(): void;
}