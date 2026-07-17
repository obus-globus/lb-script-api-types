import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SoundInstance } from '../../../../net/minecraft/client/resources/sounds/SoundInstance.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { SimpleParticleType } from '../../../../net/minecraft/core/particles/SimpleParticleType.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { JukeboxSong } from '../../../../net/minecraft/world/item/JukeboxSong.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class LevelEventHandler extends Object {
    constructor(minecraft: Minecraft, level: ClientLevel)
    // private level: ClientLevel;
    // private minecraft: Minecraft;
    // private playingJukeboxSongs: JavaMap<BlockPos, SoundInstance>;
    globalLevelEvent(type: number, pos: BlockPos, data: number): void;
    levelEvent(eventType: number, pos: BlockPos, data: number): void;
    // private notifyNearbyEntities(level: Level, pos: BlockPos, isPlaying: boolean): void;
    // private playJukeboxSong(songHolder: Holder<JukeboxSong>, pos: BlockPos): void;
    // private shootParticles(data: number, pos: BlockPos, random: RandomSource, particle: SimpleParticleType): void;
    // private stopJukeboxSong(pos: BlockPos): void;
    // private stopJukeboxSongAndNotifyNearby(pos: BlockPos): void;
}