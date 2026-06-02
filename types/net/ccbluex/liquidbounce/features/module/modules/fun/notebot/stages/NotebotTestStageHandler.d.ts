import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ModuleNotebot$NotebotStage } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/ModuleNotebot$NotebotStage.d.ts'
import type { ModuleNotebot$NotebotStageHandler } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/ModuleNotebot$NotebotStageHandler.d.ts'
import type { NoteBlockTracker } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NoteBlockTracker.d.ts'
import type { NotebotEngine } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NotebotEngine.d.ts'
import type { MutableComponent } from '../../../../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class NotebotTestStageHandler extends Object implements ModuleNotebot$NotebotStageHandler {
    constructor(engine: NotebotEngine)
    // private allBlocks: NoteBlockTracker[];
    readonly handledStage: ModuleNotebot$NotebotStage;
    // private progressName: MutableComponent;
    // private remainingNoteBlocks: NoteBlockTracker[];
    // private getNextBlockToTest(): NoteBlockTracker | null;
    onTick(engine: NotebotEngine): void;
}