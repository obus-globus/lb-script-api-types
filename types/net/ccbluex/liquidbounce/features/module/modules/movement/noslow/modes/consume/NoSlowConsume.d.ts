import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { NoSlowUseActionHandler } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noslow/NoSlowUseActionHandler.d.ts'
import type { NoSlowNoBlockInteract } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/shared/NoSlowNoBlockInteract.d.ts'
export class NoSlowConsume extends NoSlowUseActionHandler {
    static INSTANCE: NoSlowConsume;
    // private modes: ModeValueGroup<Mode>;
    // private noBlockInteract: NoSlowNoBlockInteract;
    readonly running: boolean;
}