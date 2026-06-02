import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { AbstractTickableSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractTickableSoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class UnderwaterAmbientSoundInstances$SubSound extends AbstractTickableSoundInstance {
    static EMPTY_SOUND: Identifier;
    constructor(player: LocalPlayer, event: SoundEvent)
    // private player: LocalPlayer;
    tick(): void;
}