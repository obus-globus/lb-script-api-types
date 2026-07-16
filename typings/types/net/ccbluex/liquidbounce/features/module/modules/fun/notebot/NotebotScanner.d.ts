import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { NoteBlockTracker } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NoteBlockTracker.d.ts'
import type { NotebotScanner$BlocksAndRequirements } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NotebotScanner$BlocksAndRequirements.d.ts'
import type { SongData } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/SongData.d.ts'
import type { NoteBlockInstrument } from '../../../../../../../../net/minecraft/world/level/block/state/properties/NoteBlockInstrument.d.ts'
export class NotebotScanner extends Object implements MinecraftShortcuts {
    static INSTANCE: NotebotScanner;
    // private calculateRequirements(songData: SongData): { [key: string]: any };
    scanBlocksAndCheckRequirements(songData: SongData): NotebotScanner$BlocksAndRequirements;
    // private scanSurroundingNoteBlocks(songData: SongData): Map<NoteBlockInstrument, NoteBlockTracker[]>;
}