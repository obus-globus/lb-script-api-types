import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { IsSelfBedMode } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/bed/IsSelfBedMode.d.ts'
import type { BlockPlacer } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
export class ModuleBedDefender extends ClientModule {
    static INSTANCE: ModuleBedDefender;
    // private blockSlotComparator: (param0: HotbarItemSlot) => kotlin.Boolean;
    // private isSelfBedMode: ModeValueGroup<IsSelfBedMode>;
    // private maxLayers: number;
    // private /*not mapped: */ getMaxLayers(): number;
    // private placer: BlockPlacer;
    // private requiresSneak: boolean;
    // private /*not mapped: */ getRequiresSneak(): boolean;
    // private targetUpdater: EventHook<RotationUpdateEvent>;
    // private blockHardness(slot: HotbarItemSlot): number;
    // private findBestBlockSlot(): HotbarItemSlot | null;
    onDisabled(): void;
}