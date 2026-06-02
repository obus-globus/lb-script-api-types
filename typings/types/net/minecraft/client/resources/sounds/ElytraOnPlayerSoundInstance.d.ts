import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { AbstractTickableSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractTickableSoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ElytraOnPlayerSoundInstance extends AbstractTickableSoundInstance {
    static DELAY: number;
    static EMPTY_SOUND: Identifier;
    constructor(player: LocalPlayer)
    // private player: LocalPlayer;
    // private time: number;
    tick(): void;
}