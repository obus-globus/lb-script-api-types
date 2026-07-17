import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { NoFallCancel$DistanceMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallCancel$DistanceMode.d.ts'
export class NoFallCancel$Constant extends NoFallCancel$DistanceMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallCancel$Constant;
    readonly value: number;
    getValue(): number;
}