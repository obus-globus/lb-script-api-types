import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ScaffoldAutoBlockFeature extends ToggleableValueGroup {
    static INSTANCE: ScaffoldAutoBlockFeature;
    readonly alwaysHoldBlock: boolean;
    readonly doNotUseBelowCount: number;
    readonly slotResetDelay: number;
}