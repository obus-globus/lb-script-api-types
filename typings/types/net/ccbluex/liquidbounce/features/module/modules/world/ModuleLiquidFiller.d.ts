import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleLiquidFiller$PlaceIn } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleLiquidFiller$PlaceIn.d.ts'
import type { ModuleLiquidFiller$PlaceOrder } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleLiquidFiller$PlaceOrder.d.ts'
import type { BlockPlacer } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
/**
 * LiquidFiller module
 *
 * Places blocks inside of liquid source blocks within range of you.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleLiquidFiller.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleLiquidFiller.kt:57}
 */
export class ModuleLiquidFiller extends ClientModule {
    static INSTANCE: ModuleLiquidFiller;
    // private blocks: Block[];
    // private /*not mapped: */ getBlocks(): Block[];
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private placeIn: ModuleLiquidFiller$PlaceIn[];
    // private /*not mapped: */ getPlaceIn(): ModuleLiquidFiller$PlaceIn[];
    // private placeOrder: ModuleLiquidFiller$PlaceOrder;
    // private /*not mapped: */ getPlaceOrder(): ModuleLiquidFiller$PlaceOrder;
    // private placer: BlockPlacer;
    // private targetUpdater: EventHook<RotationUpdateEvent>;
    // private useSponge: boolean;
    // private /*not mapped: */ getUseSponge(): boolean;
    // private canAbsorbWaterFrom(spongePos: BlockPos, waterPos: BlockPos): boolean;
    // private findFillTargets(): BlockPos[];
    // private findSlotForTarget(pos: BlockPos | null): HotbarItemSlot | null;
    // private findSpongePlacement(waterPos: BlockPos, scanRange: number): BlockPos | null;
    // private isWaterTarget(pos: BlockPos): boolean;
    onDisabled(): void;
    // private shouldFill(state: BlockState, hasNormalFiller: boolean, hasSponge: boolean): boolean;
    // private spongeSlot(): HotbarItemSlot | null;
}