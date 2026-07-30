import type { JavaMap } from '../../../../../../JavaMap.d.ts'
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
import type { HotbarItemSlot } from '../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { Priority } from '../../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
import type { PlacementRenderer } from '../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L143 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:143}
     */
    readonly blocks: JavaMap<any, any>;
    getBlocks(): JavaMap<any, any>;
    /**
     * Construct a center hit result when the raytrace result is invalid.
     * This can make the module rotations wrong as well as place a bit outside the range,
     * but it makes the placements a lot more reliable and works on most servers.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L90 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:90}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L130 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:130}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L125 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:125}
     */
    readonly targetRenderer: PlacementRenderer;
    // private targetUpdater: EventHook<RotationUpdateEvent>;
    ticksToWait: number;
    readonly wallRange: number;
    readonly worldChangeHandler: EventHook<WorldChangeEvent>;
    /**
     * Adds a block to be placed.
     *
     * @param pos The position, can be {@link BlockPos.MutableBlockPos}.
     * @param update Whether the renderer should update the culling.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L410 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:410}
     */
    addToQueue(pos: BlockPos, update: boolean, isSupport: boolean): void;
    canReach(pos: BlockPos, rotation: Rotation): boolean;
    children(): EventListener[];
    /**
     * Discards all blocks.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L430 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:430}
     */
    clear(): void;
    /**
     * THis should be called when the module using this placer is disabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L438 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:438}
     */
    disable(): void;
    doPlacement(isSupport: boolean, pos: BlockPos, placementTarget: BlockPlacementTarget): void;
    // private findSupportPath(itemStack: ItemStack): void;
    // private isBlocked(posAsLong: number): boolean;
    isDone(): boolean;
    parent(): EventListener | null;
    // private raytraceTarget(pos: BlockPos, providedRotation: Rotation, direction: Direction): BlockHitResult | null;
    /**
     * Removes a block from the queue.
     *
     * @param pos The position, can be {@link BlockPos.MutableBlockPos}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L422 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:422}
     */
    removeFromQueue(pos: BlockPos): void;
    // private reset(): void;
    // private scheduleCurrentPlacements(itemStack: ItemStack): boolean;
    unregister(): void;
    /**
     * Removes all positions that are not in {@link positions} and adds all that are not in the queue.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt#L387 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.kt:387}
     */
    update(positions: BlockPos[]): void;
}