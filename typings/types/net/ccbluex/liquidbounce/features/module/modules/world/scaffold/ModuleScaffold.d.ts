import type { IndexedValue } from '../../../../../../../../kotlin/collections/IndexedValue.d.ts'
import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleScaffold$SameYMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold$SameYMode.d.ts'
import type { ScaffoldTechnique } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldTechnique.d.ts'
import type { ScaffoldTower } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/tower/ScaffoldTower.d.ts'
import type { SwingMode } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { BlockPlacementTarget } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { Line } from '../../../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { DirectionalInput } from '../../../../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
import type { PlacementRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.d.ts'
import type { ComparatorChain } from '../../../../../../../../net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { InteractionHand } from '../../../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockHitResult } from '../../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
/**
 * Scaffold module
 *
 * Places blocks under you.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt#L118 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt:118}
 */
export class ModuleScaffold extends ClientModule {
    static BLOCK_COMPARATOR_FOR_INVENTORY: ComparatorChain<ItemStack>;
    static INSTANCE: ModuleScaffold;
    // private BLOCK_COMPARATOR_FOR_HOTBAR: ComparatorChain<ItemStack>;
    BLOCK_COMPARATOR_FOR_INVENTORY: ComparatorChain<ItemStack>;
    // private /*not mapped: */ getActiveTechnique(): ScaffoldTechnique;
    /**
     * Temporarily turns on {@link net.ccbluex.liquidbounce.features.module.modules.movement.speed.ModuleSpeed}
     * while Scaffold is enabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt#L270 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt:270}
     */
    readonly autoSpeed: boolean;
    readonly blockCount: number;
    readonly currentOptimalLine: Line | null;
    // private currentTarget: BlockPlacementTarget | null;
    // private delay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelay(): { start: number; endInclusive: number; step: number };
    // private forceSneak: number;
    // private handleMovementInput: EventHook<MovementInputEvent>;
    /*not mapped: */ isBlockBelow(): boolean;
    /*not mapped: */ isTowering$net_ccbluex_liquidbounce(): boolean;
    // private jumps: number;
    // private ledge: boolean;
    // private /*not mapped: */ getLedge(): boolean;
    // private minDist: number;
    // private /*not mapped: */ getMinDist(): number;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    // private nextBlock: Block | null;
    // private placementY: number;
    readonly rawInput: DirectionalInput;
    // private renderer: PlacementRenderer;
    // private rotationUpdateHandler: EventHook<RotationUpdateEvent>;
    // private safeWalkMode: ModeValueGroup<Mode>;
    // private sameYMode: ModuleScaffold$SameYMode;
    // private /*not mapped: */ getSameYMode(): ModuleScaffold$SameYMode;
    // private startY: number;
    // private swingMode: SwingMode;
    // private /*not mapped: */ getSwingMode(): SwingMode;
    // private technique: ModeValueGroup<ScaffoldTechnique>;
    /*not mapped: */ getTechnique$net_ccbluex_liquidbounce(): ModeValueGroup<ScaffoldTechnique>;
    // private tickHandler: EventHook<GameTickEvent>;
    // private timer: number;
    // private /*not mapped: */ getTimer(): number;
    // private timerHandler: EventHook<GameTickEvent>;
    /**
     * Scaffold tower mode
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt#L190 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt:190}
     */
    readonly towerMode: ModeValueGroup<ScaffoldTower>;
    // private wasTowering: boolean;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private findBestValidHotbarSlotForTarget(): number | null;
    // private findPlaceableSlots(): IndexedValue<ItemStack>[];
    getTargetedPosition(blockPos: BlockPos): BlockPos;
    // private handleSilentBlockSelection(hasBlockInMainHand: boolean, hasBlockInOffHand: boolean): boolean;
    isValidCrosshairTarget(rayTraceResult: BlockHitResult): boolean;
    onDisabled(): void;
    onEnabled(): void;
    // private reset(): void;
    // private simulatePlacementAttempts(hitResult: BlockHitResult | null, suitableHand: InteractionHand | null): boolean;
    // private updateRenderCount(count: number | null): void;
}