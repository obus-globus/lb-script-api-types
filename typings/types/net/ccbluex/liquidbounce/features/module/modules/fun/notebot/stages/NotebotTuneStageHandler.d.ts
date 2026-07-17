import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../../../kotlin/Pair.d.ts'
import type { ModuleNotebot$NotebotStage } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/ModuleNotebot$NotebotStage.d.ts'
import type { ModuleNotebot$NotebotStageHandler } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/ModuleNotebot$NotebotStageHandler.d.ts'
import type { NoteBlockTracker } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NoteBlockTracker.d.ts'
import type { NotebotEngine } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NotebotEngine.d.ts'
import type { InstrumentNote } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/InstrumentNote.d.ts'
import type { MutableComponent } from '../../../../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class NotebotTuneStageHandler extends Object implements ModuleNotebot$NotebotStageHandler {
    constructor(engine: NotebotEngine)
    // private assignments: JavaMap<InstrumentNote, NoteBlockTracker[]>;
    // private blocks: Pair<NoteBlockTracker, InstrumentNote>[];
    readonly handledStage: ModuleNotebot$NotebotStage;
    // private progressName: MutableComponent;
    // private assignBlocks(engine: NotebotEngine): JavaMap<InstrumentNote, NoteBlockTracker[]>;
    // private assignBlocksOfInstrument(output: JavaMap<InstrumentNote, NoteBlockTracker[]>, blocksForInstrument: NoteBlockTracker[], notesOfInstrument: InstrumentNote[]): void;
    // private calculateTuneCost(from: number, to: number): number;
    onTick(engine: NotebotEngine): void;
}