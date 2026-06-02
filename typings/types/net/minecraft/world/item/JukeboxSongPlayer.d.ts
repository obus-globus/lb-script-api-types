import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { JukeboxSong } from '../../../../net/minecraft/world/item/JukeboxSong.d.ts'
import type { JukeboxSongPlayer$OnSongChanged } from '../../../../net/minecraft/world/item/JukeboxSongPlayer$OnSongChanged.d.ts'
import type { LevelAccessor } from '../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class JukeboxSongPlayer extends Object {
    static PLAY_EVENT_INTERVAL_TICKS: number;
    constructor(onSongChanged: () => void, blockPos: BlockPos)
    // private blockPos: BlockPos;
    // private onSongChanged: () => void;
    readonly song: Holder<JukeboxSong>;
    readonly ticksSinceSongStarted: number;
    getSong(): JukeboxSong;
    getTicksSinceSongStarted(): number;
    isPlaying(): boolean;
    play(level: LevelAccessor, song: Holder<JukeboxSong>): void;
    setSongWithoutPlaying(song: Holder<JukeboxSong>, ticksSinceSongStarted: number): void;
    // private shouldEmitJukeboxPlayingEvent(): boolean;
    stop(level: LevelAccessor, blockState: BlockState): void;
    tick(level: LevelAccessor, blockState: BlockState): void;
}