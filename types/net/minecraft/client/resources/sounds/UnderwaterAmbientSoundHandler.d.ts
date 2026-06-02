import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { AmbientSoundHandler } from '../../../../../net/minecraft/client/resources/sounds/AmbientSoundHandler.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
export class UnderwaterAmbientSoundHandler extends Object implements AmbientSoundHandler {
    static CHANCE_PER_TICK: number;
    static RARE_CHANCE_PER_TICK: number;
    static ULTRA_RARE_CHANCE_PER_TICK: number;
    constructor(player: LocalPlayer, soundManager: SoundManager)
    // private player: LocalPlayer;
    // private soundManager: SoundManager;
    // private tickDelay: number;
    tick(): void;
}