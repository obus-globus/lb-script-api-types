import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { SoundInstance } from '../../../../net/minecraft/client/resources/sounds/SoundInstance.d.ts'
import type { MusicManager$MusicFrequency } from '../../../../net/minecraft/client/sounds/MusicManager$MusicFrequency.d.ts'
import type { Music } from '../../../../net/minecraft/sounds/Music.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class MusicManager extends Object {
    constructor(minecraft: Minecraft)
    // private currentGain: number;
    // private currentMusic: SoundInstance;
    // private gameMusicFrequency: MusicManager$MusicFrequency;
    // private minecraft: Minecraft;
    // private nextSongDelay: number;
    // private random: RandomSource;
    // private toastShown: boolean;
    // private fadePlaying(volume: number): boolean;
    getCurrentMusicTranslationKey(): string;
    isPlayingMusic(music: Music): boolean;
    setMinutesBetweenSongs(musicFrequency: MusicManager$MusicFrequency): void;
    showNowPlayingToastIfNeeded(): void;
    startPlaying(music: Music): void;
    stopPlaying(): void;
    stopPlaying(music: Music): void;
    tick(): void;
}