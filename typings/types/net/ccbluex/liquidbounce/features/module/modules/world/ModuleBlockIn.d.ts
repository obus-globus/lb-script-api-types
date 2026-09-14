import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerMovementTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMovementTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleBlockIn$DisableOn } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockIn$DisableOn.d.ts'
import type { ModuleBlockIn$Order } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockIn$Order.d.ts'
import type { BlockPlacer } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * BlockIn module
 *
 * Builds blocks to cover yourself.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockIn.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockIn.kt:55}
 */
export class ModuleBlockIn extends ClientModule {
    static INSTANCE: ModuleBlockIn;
    // private avoidBrokenBlocks: boolean;
    // private /*not mapped: */ getAvoidBrokenBlocks(): boolean;
    // private blockList: BlockPos[];
    // private blockPlacer: BlockPlacer;
    // private blocks: Block[];
    // private /*not mapped: */ getBlocks(): Block[];
    // private brokenBlockWindow: number;
    // private /*not mapped: */ getBrokenBlockWindow(): number;
    // private compareByY: (param0: BlockPos, param1: BlockPos) => number;
    // private disableOn: ModuleBlockIn$DisableOn[];
    // private /*not mapped: */ getDisableOn(): ModuleBlockIn$DisableOn[];
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private moved: boolean;
    // private movementHandler: EventHook<PlayerMovementTickEvent>;
    // private packetHandler: EventHook<PacketEvent>;
    // private placeOrder: ModuleBlockIn$Order;
    // private /*not mapped: */ getPlaceOrder(): ModuleBlockIn$Order;
    // private recentlyBrokenBlocks: JavaMap<any, any>;
    // private rotateClockwise: boolean;
    // private startPos: BlockPos$MutableBlockPos;
    // private tickHandler: EventHook<GameTickEvent>;
    // private getPositions(): void;
    onDisabled(): void;
    onEnabled(): void;
    // private rotateSurroundings(action: (param0: Direction) => void): void;
    // private slotFinder(pos: BlockPos | null): HotbarItemSlot | null;
}