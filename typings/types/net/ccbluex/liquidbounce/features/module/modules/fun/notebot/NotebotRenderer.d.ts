import type { ModuleNotebot$NotebotStage } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/ModuleNotebot$NotebotStage.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Chronometer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { PlacementRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.d.ts'
export class NotebotRenderer extends PlacementRenderer {
    static INSTANCE: NotebotRenderer;
    // private TRANSITION_TIME: number;
    // private currentStage: ModuleNotebot$NotebotStage;
    // private lastStage: ModuleNotebot$NotebotStage;
    readonly outlineTestColor: Color4b;
    readonly outlineTuneColor: Color4b;
    // private stageChangeChronometer: Chronometer;
    readonly testColor: Color4b;
    readonly tuneColor: Color4b;
    getColor(id: number): Color4b;
    getOutlineColor(id: number): Color4b;
    // private getTransitionProgress(): number;
    onStateChange(stage: ModuleNotebot$NotebotStage): void;
    reset(): void;
}