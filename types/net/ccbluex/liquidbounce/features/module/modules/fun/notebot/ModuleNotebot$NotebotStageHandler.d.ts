import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModuleNotebot$NotebotStage } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/ModuleNotebot$NotebotStage.d.ts'
import type { NotebotEngine } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NotebotEngine.d.ts'
export interface ModuleNotebot$NotebotStageHandler extends Object{
    readonly handledStage: ModuleNotebot$NotebotStage;
    onTick(engine: NotebotEngine): void;
}