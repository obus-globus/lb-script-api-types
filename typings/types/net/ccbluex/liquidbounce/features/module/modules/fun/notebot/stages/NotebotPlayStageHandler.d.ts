import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ModuleNotebot$NotebotStage } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/ModuleNotebot$NotebotStage.d.ts'
import type { ModuleNotebot$NotebotStageHandler } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/ModuleNotebot$NotebotStageHandler.d.ts'
import type { NoteBlockTracker } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NoteBlockTracker.d.ts'
import type { NotebotEngine } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NotebotEngine.d.ts'
import type { InstrumentNote } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/InstrumentNote.d.ts'
import type { SongData } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/SongData.d.ts'
import type { MutableComponent } from '../../../../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class NotebotPlayStageHandler extends Object implements ModuleNotebot$NotebotStageHandler {
    constructor(availableBlocksForNote: Map<InstrumentNote, NoteBlockTracker[]>)
    // private availableBlocksForNote: Map<InstrumentNote, NoteBlockTracker[]>;
    // private currentSongTick: number;
    readonly handledStage: ModuleNotebot$NotebotStage;
    // private progressName: MutableComponent;
    // private songTickAccumulator: number;
    onTick(engine: NotebotEngine): void;
    // private playNotesAtTick(tick: number, songData: SongData): void;
}