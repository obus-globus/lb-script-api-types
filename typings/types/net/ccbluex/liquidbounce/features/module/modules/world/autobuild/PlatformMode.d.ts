import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ModuleAutoBuild$AutoBuildMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/autobuild/ModuleAutoBuild$AutoBuildMode.d.ts'
import type { Filter } from '../../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class PlatformMode extends ModuleAutoBuild$AutoBuildMode {
    static Companion: Tagged$Companion;
    static INSTANCE: PlatformMode;
    // private blocks: Block[];
    // private /*not mapped: */ getBlocks(): Block[];
    // private disableOnYChange: boolean;
    // private /*not mapped: */ getDisableOnYChange(): boolean;
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private platformSize: number;
    // private /*not mapped: */ getPlatformSize(): number;
    // private repeatable: EventHook<GameTickEvent>;
    // private startY: number;
    // private targetUpdater: EventHook<RotationUpdateEvent>;
    enabled(): void;
    getSlot(): HotbarItemSlot | null;
}