import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { AmbientSoundHandler } from '../../../../../net/minecraft/client/resources/sounds/AmbientSoundHandler.d.ts'
export class BubbleColumnAmbientSoundHandler extends Object implements AmbientSoundHandler {
    constructor(player: LocalPlayer)
    // private firstTick: boolean;
    // private player: LocalPlayer;
    // private wasInBubbleColumn: boolean;
    tick(): void;
}