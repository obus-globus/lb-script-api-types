import type { AbstractTickableSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractTickableSoundInstance.d.ts'
import type { BeeSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/BeeSoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Bee } from '../../../../../net/minecraft/world/entity/animal/bee/Bee.d.ts'
export class BeeAggressiveSoundInstance extends BeeSoundInstance {
    static EMPTY_SOUND: Identifier;
    constructor(bee: Bee)
    getAlternativeSoundInstance(): AbstractTickableSoundInstance;
    shouldSwitchSounds(): boolean;
}