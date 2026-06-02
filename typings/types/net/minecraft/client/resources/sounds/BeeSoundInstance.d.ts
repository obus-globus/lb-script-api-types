import type { AbstractTickableSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractTickableSoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { Bee } from '../../../../../net/minecraft/world/entity/animal/bee/Bee.d.ts'
export abstract class BeeSoundInstance extends AbstractTickableSoundInstance {
    static EMPTY_SOUND: Identifier;
    constructor(bee: Bee, event: SoundEvent, source: SoundSource)
    // private bee: Bee;
    // private hasSwitched: boolean;
    canPlaySound(): boolean;
    canStartSilent(): boolean;
    getAlternativeSoundInstance(): AbstractTickableSoundInstance;
    // private getMaxPitch(): number;
    // private getMinPitch(): number;
    shouldSwitchSounds(): boolean;
    tick(): void;
}