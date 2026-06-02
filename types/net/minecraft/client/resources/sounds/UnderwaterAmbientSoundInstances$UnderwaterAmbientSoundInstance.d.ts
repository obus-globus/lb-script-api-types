import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { AbstractTickableSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractTickableSoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class UnderwaterAmbientSoundInstances$UnderwaterAmbientSoundInstance extends AbstractTickableSoundInstance {
    static EMPTY_SOUND: Identifier;
    static FADE_DURATION: number;
    constructor(player: LocalPlayer)
    // private fade: number;
    // private player: LocalPlayer;
    tick(): void;
}