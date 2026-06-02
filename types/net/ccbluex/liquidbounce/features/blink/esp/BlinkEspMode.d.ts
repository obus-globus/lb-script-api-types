import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { BlinkEspData } from '../../../../../../net/ccbluex/liquidbounce/features/blink/esp/BlinkEspData.d.ts'
export class BlinkEspMode extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string, getEspData: () => BlinkEspData | null)
    // private getEspData: () => BlinkEspData | null;
    // private /*not mapped: */ getGetEspData(): () => BlinkEspData | null;
}