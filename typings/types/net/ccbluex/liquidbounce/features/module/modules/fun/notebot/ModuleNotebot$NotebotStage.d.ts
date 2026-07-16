import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ModuleNotebot$NotebotStage extends Enum<ModuleNotebot$NotebotStage> {
    static PLAY: ModuleNotebot$NotebotStage;
    static TEST: ModuleNotebot$NotebotStage;
    static TUNE: ModuleNotebot$NotebotStage;
    static getEntries(): ModuleNotebot$NotebotStage[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleNotebot$NotebotStage;
    static values(): ModuleNotebot$NotebotStage[];
    private constructor(stageStartDelay: () => number, blockColor: () => Color4b, blockOutlineColor: () => Color4b)
    readonly blockColor: () => Color4b;
    readonly blockOutlineColor: () => Color4b;
    readonly stageStartDelay: () => number;
    name(): "TEST" | "TUNE" | "PLAY";
}