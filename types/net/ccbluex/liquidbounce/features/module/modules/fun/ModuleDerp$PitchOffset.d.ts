import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleDerp$PitchMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDerp$PitchMode.d.ts'
export class ModuleDerp$PitchOffset extends ModuleDerp$PitchMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleDerp$PitchOffset;
    readonly pitch: number;
    readonly pitchOffsetValue: number;
}