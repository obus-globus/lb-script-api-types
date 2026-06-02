import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { BedBlockTracker$Subscriber } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/bed/BedBlockTracker$Subscriber.d.ts'
export class ModuleAutoTool$RequireNearBed extends ToggleableValueGroup implements BedBlockTracker$Subscriber {
    static INSTANCE: ModuleAutoTool$RequireNearBed;
    // private distance: number;
    // private /*not mapped: */ getDistance(): number;
    readonly maxLayers: number;
    matches(): boolean;
    onDisabled(): void;
    onEnabled(): void;
}