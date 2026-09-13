import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { MovementInputEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { SwingMode } from '../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { BlockPlacer$Ignore } from '../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer$Ignore.d.ts'
import type { BlockPlacerRotationMode } from '../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacerRotationMode.d.ts'
import type { CrystalDestroyFeature } from '../../../../../../net/ccbluex/liquidbounce/utils/block/placer/CrystalDestroyFeature.d.ts'
import type { SupportFeature } from '../../../../../../net/ccbluex/liquidbounce/utils/block/placer/SupportFeature.d.ts'
import type { BlockPlacementTarget } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { BlockPlacementTargetFindingOptions } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTargetFindingOptions.d.ts'
import type { HotbarItemSlot } from '../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { Priority } from '../../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
import type { PlacementRenderer } from '../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockHitResult } from '../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export class BlockPlacer extends ValueGroup implements EventListener {
    constructor(name: string, module: ClientModule, priority: Priority, slotFinder: (param0: BlockPos | null) => HotbarItemSlot | null, allowSupportPlacements: boolean)
    // private blockPosCache: BlockPos$MutableBlockPos;
    /**
     * Stores all block positions where blocks should be placed paired with a boolean that is `true`
     * if the position was added by {@link support}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L145 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:145}
     */
    readonly blocks: JavaMap<any, any>;
    getBlocks(): JavaMap<any, any>;
    /**
     * Construct a hit result at the point selected by target finding when the raytrace result is invalid.
     * This can make the module rotations wrong as well as place a bit outside the range,
     * but it makes the placements a lot more reliable and works on most servers.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L92 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:92}
     */
    readonly constructFailResult: boolean;
    readonly cooldown: { start: number; endInclusive: number; step: number };
    readonly crystalDestroyer: CrystalDestroyFeature;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    readonly ignoreOpenInventory: boolean;
    readonly ignoreUsingItem: boolean;
    // private ignores: BlockPlacer$Ignore[];
    // private /*not mapped: */ getIgnores(): BlockPlacer$Ignore[];
    // private inaccessible: (Object | null)[];
    readonly module: ClientModule;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    /**
     * Renders all placements.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L132 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:132}
     */
    readonly placedRenderer: PlacementRenderer;
    readonly priority: Priority;
    ranAction: boolean;
    readonly range: number;
    readonly rotationMode: ModeValueGroup<BlockPlacerRotationMode>;
    readonly running: boolean;
    readonly slotFinder: (param0: BlockPos | null) => HotbarItemSlot | null;
    readonly slotResetDelay: { start: number; endInclusive: number; step: number };
    // private sneak: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getSneak(): { start: number; endInclusive: number; step: number };
    // private sneakTimes: number;
    readonly support: SupportFeature;
    readonly swingMode: SwingMode;
    /**
     * Renders all tracked positions that are queued to be placed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L127 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:127}
     */
    readonly targetRenderer: PlacementRenderer;
    // private targetUpdater: EventHook<RotationUpdateEvent>;
    readonly ticksToWait: number;
    readonly wallRange: number;
    readonly worldChangeHandler: EventHook<WorldChangeEvent>;
    /**
     * Adds a block to be placed.
     *
     * @param pos The position, can be {@link BlockPos.MutableBlockPos}.
     * @param update Whether the renderer should update the culling.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L471 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:471}
     */
    addToQueue(pos: BlockPos, update: boolean, isSupport: boolean): void;
    /**
     * Checks whether the player can currently click-place a block at {@link pos} from their position.
     *
     * This mirrors the exact placement check done in {@link scheduleCurrentPlacements} (same search options,
     * including face-away handling), so a support path never ends at a position the actual placement
     * would reject. On top of that it requires the chosen click point to be unobstructed from the
     * player's current view — if it is not visible (e.g. the target face is occluded by the block
     * itself), the position is rejected and the support search keeps going past it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L425 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:425}
     */
    canClickPlace(pos: BlockPos): boolean;
    canReach(pos: BlockPos, rotation: Rotation): boolean;
    children(): EventListener[];
    /**
     * Discards all blocks.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L491 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:491}
     */
    clear(): void;
    // private createSearchOptions(stackToPlaceWith: ItemStack): BlockPlacementTargetFindingOptions;
    /**
     * This should be called when the module using this placer is disabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L499 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:499}
     */
    disable(): void;
    doPlacement(isSupport: boolean, pos: BlockPos, placementTarget: BlockPlacementTarget): boolean;
    // private findSupportPath(itemStack: ItemStack): void;
    // private isBlocked(posAsLong: number): boolean;
    isDone(): boolean;
    parent(): EventListener | null;
    // private raycastHitResult(pos: BlockPos, rotation: Rotation, range: number): BlockHitResult | null;
    // private raytraceTarget(placementTarget: BlockPlacementTarget, providedRotation: Rotation): BlockHitResult | null;
    /**
     * Removes a block from the queue.
     *
     * @param pos The position, can be {@link BlockPos.MutableBlockPos}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L483 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:483}
     */
    removeFromQueue(pos: BlockPos): void;
    // private reset(): void;
    // private scheduleCurrentPlacements(itemStack: ItemStack): boolean;
    unregister(): void;
    /**
     * Removes all positions that are not in {@link positions} and adds all that are not in the queue.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L448 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:448}
     */
    update(positions: BlockPos[]): void;
}