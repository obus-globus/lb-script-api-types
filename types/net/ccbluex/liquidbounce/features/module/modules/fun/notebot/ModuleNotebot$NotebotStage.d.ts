import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Function0 } from '../../../../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ModuleNotebot$NotebotStage extends Enum<ModuleNotebot$NotebotStage> {
    static PLAY: ModuleNotebot$NotebotStage;
    static TEST: ModuleNotebot$NotebotStage;
    static TUNE: ModuleNotebot$NotebotStage;
    static getEntries(): ModuleNotebot$NotebotStage[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleNotebot$NotebotStage;
    static values(): (Object | null)[];
    private constructor(stageStartDelay: Function0<number>, blockColor: Function0<Color4b>, blockOutlineColor: Function0<Color4b>)
    readonly blockColor: () => Color4b;
    readonly blockOutlineColor: () => Color4b;
    readonly stageStartDelay: () => number;
    name(): "TEST" | "TUNE" | "PLAY";
}