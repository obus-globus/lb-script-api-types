import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { RefreshableIntState } from '../../../../../../../../net/ccbluex/liquidbounce/config/utils/RefreshableIntState.d.ts'
import type { Chronometer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
export class ModuleAutoFarm$AutoUseBoneMeal extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoFarm$AutoUseBoneMeal;
    // private chronometer: Chronometer;
    /*not mapped: */ isReady(): boolean;
    readonly swapBackDelay: { start: number; endInclusive: number; step: number };
    // private useDelay: RefreshableIntState;
    reset(): void;
}