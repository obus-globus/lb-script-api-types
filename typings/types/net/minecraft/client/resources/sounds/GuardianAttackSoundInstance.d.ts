import type { AbstractTickableSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractTickableSoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Guardian } from '../../../../../net/minecraft/world/entity/monster/Guardian.d.ts'
export class GuardianAttackSoundInstance extends AbstractTickableSoundInstance {
    static EMPTY_SOUND: Identifier;
    constructor(guardian: Guardian)
    // private guardian: Guardian;
    canPlaySound(): boolean;
    tick(): void;
}