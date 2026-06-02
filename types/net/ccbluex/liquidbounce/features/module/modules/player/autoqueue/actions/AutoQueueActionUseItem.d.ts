import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { AutoQueueAction } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/actions/AutoQueueAction.d.ts'
import type { SingleItemStackPickMode } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/SingleItemStackPickMode.d.ts'
export class AutoQueueActionUseItem extends AutoQueueAction {
    static Companion: Tagged$Companion;
    static INSTANCE: AutoQueueActionUseItem;
    // private mode: ModeValueGroup<SingleItemStackPickMode>;
    execute(): void;
}