import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { BlinkEspMode } from '../../../../../../net/ccbluex/liquidbounce/features/blink/esp/BlinkEspMode.d.ts'
export class BlinkEspNone extends BlinkEspMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    readonly parent: ModeValueGroup<Object>;
}