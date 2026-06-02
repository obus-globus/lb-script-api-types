import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { Music } from '../../../net/minecraft/sounds/Music.d.ts'
import type { SoundEvent } from '../../../net/minecraft/sounds/SoundEvent.d.ts'
export class Musics extends Object {
    static CREATIVE: Music;
    static CREDITS: Music;
    static END: Music;
    static END_BOSS: Music;
    static GAME: Music;
    static MENU: Music;
    static UNDER_WATER: Music;
    static createGameMusic(paramsoundEvent: Holder<SoundEvent>): Music;
    constructor()
}