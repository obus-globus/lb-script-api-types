import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class AutoQueueTrigger extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string)
    /*not mapped: */ isTriggered(): boolean;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
}