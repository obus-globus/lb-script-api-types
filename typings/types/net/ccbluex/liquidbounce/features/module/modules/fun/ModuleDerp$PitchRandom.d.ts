import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleDerp$PitchMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDerp$PitchMode.d.ts'
export class ModuleDerp$PitchRandom extends ModuleDerp$PitchMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleDerp$PitchRandom;
    readonly parent: ModeValueGroup<any>;
    readonly pitch: number;
}