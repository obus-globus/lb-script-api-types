import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export abstract class NoFallPacket$Filter extends Mode {
    static Companion: Tagged$Companion;
    constructor(name: string)
    /*not mapped: */ isActive(): boolean;
    readonly parent: ModeValueGroup<any>;
}