import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { CurveValue } from '../../../../../../../net/ccbluex/liquidbounce/config/types/CurveValue.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { OverlayRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleItemTags$ClusteredEntitiesRenderState } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleItemTags$ClusteredEntitiesRenderState.d.ts'
import type { ModuleItemTags$MergeMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleItemTags$MergeMode.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * ItemTags module
 *
 * Show the names and quantities of items in several boxes.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleItemTags.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleItemTags.kt:66}
 */
export class ModuleItemTags extends ClientModule {
    static INSTANCE: ModuleItemTags;
    // private backgroundColor: Color4b;
    // private /*not mapped: */ getBackgroundColor(): Color4b;
    // private clusterEntities: CurveValue;
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private itemEntities: ModuleItemTags$ClusteredEntitiesRenderState[];
    // private /*not mapped: */ getItemEntities(): ModuleItemTags$ClusteredEntitiesRenderState[];
    // private itemStackComparator: (param0: ItemStack, param1: ItemStack) => number;
    // private items: Item[];
    // private /*not mapped: */ getItems(): Item[];
    // private mergeMode: ModuleItemTags$MergeMode;
    // private /*not mapped: */ getMergeMode(): ModuleItemTags$MergeMode;
    // private preventOverlap: boolean;
    // private /*not mapped: */ getPreventOverlap(): boolean;
    // private renderHandler: EventHook<OverlayRenderEvent>;
    // private renderOffset: Vec3;
    // private /*not mapped: */ getRenderOffset(): Vec3;
    // private rowLength: number;
    // private /*not mapped: */ getRowLength(): number;
    // private scale: CurveValue;
    // private worldHandler: EventHook<WorldChangeEvent>;
    onDisabled(): void;
}