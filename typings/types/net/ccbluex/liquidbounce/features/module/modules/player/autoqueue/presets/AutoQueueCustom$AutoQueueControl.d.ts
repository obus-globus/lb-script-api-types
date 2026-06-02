import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class AutoQueueCustom$AutoQueueControl extends ToggleableValueGroup {
    static INSTANCE: AutoQueueCustom$AutoQueueControl;
    readonly killAura: boolean;
    readonly speed: boolean;
    wasInQueue: boolean;
}