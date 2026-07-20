import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { Pair } from '../../../../../../../../kotlin/Pair.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { CancelBlockBreakingEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/CancelBlockBreakingEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleFucker$DestroyAction } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker$DestroyAction.d.ts'
import type { ModuleFucker$DestroyerTarget } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker$DestroyerTarget.d.ts'
import type { ModuleFucker$SurroundingInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker$SurroundingInfo.d.ts'
import type { ModuleFucker$SurroundingPath } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker$SurroundingPath.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { IsSelfBedMode } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/bed/IsSelfBedMode.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { PlacementRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Fucker module
 *
 * Destroys/Uses selected blocks around you.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt:83}
 */
export class ModuleFucker extends ClientModule {
    static INSTANCE: ModuleFucker;
    // private MAX_SURROUNDING_PATH_BLOCKS: number;
    // private RAYCAST_TARGET_EPSILON: number;
    // private SURROUNDING_INFO_COMPARATOR: (param0: ModuleFucker$SurroundingInfo, param1: ModuleFucker$SurroundingInfo) => number;
    // private action: ModuleFucker$DestroyAction;
    // private /*not mapped: */ getAction(): ModuleFucker$DestroyAction;
    // private /*not mapped: */ getAvailableToolSlots(): ItemSlot[];
    // private breaker: EventHook<GameTickEvent>;
    // private cancelBlockBreakingHandler: EventHook<CancelBlockBreakingEvent>;
    // private chestAsFullBlock: boolean;
    // private /*not mapped: */ getChestAsFullBlock(): boolean;
    // private comparator: (param0: Pair<BlockPos, BlockState>, param1: Pair<BlockPos, BlockState>) => number;
    // private currentTarget: ModuleFucker$DestroyerTarget | null;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    // private forceImmediateBreak: boolean;
    // private /*not mapped: */ getForceImmediateBreak(): boolean;
    // private ignoreOpenInventory: boolean;
    // private /*not mapped: */ getIgnoreOpenInventory(): boolean;
    // private ignoreUsingItem: boolean;
    // private /*not mapped: */ getIgnoreUsingItem(): boolean;
    // private isSelfBedMode: ModeValueGroup<IsSelfBedMode>;
    // private oldTarget: ModuleFucker$DestroyerTarget | null;
    // private prioritizeOverKillAura: boolean;
    // private /*not mapped: */ getPrioritizeOverKillAura(): boolean;
    // private range: number;
    // private /*not mapped: */ getRange(): number;
    // private rotations: RotationsValueGroup;
    // private surroundings: boolean;
    // private /*not mapped: */ getSurroundings(): boolean;
    // private targetPointProportions: number[];
    // private targetRenderer: PlacementRenderer;
    // private targetUpdater: EventHook<RotationUpdateEvent>;
    // private targets: Block[];
    // private /*not mapped: */ getTargets(): Block[];
    // private wallRange: number;
    // private /*not mapped: */ getWallRange(): number;
    // private clearCurrentTarget(): void;
    // private considerAsTarget(target: ModuleFucker$DestroyerTarget, range: number, throughWallsRange: number, isCurrentTarget: boolean): boolean | null;
    // private findBestSurroundingPath(target: BlockPos, eyePos: Vec3): ModuleFucker$SurroundingPath | null;
    // private miningDuration(pos: BlockPos, state: BlockState): number;
    onDisabled(): void;
    // private searchPossibleTargetPositions(): BlockPos[];
    // private traceBlocksToTarget(target: BlockPos, eyePos: Vec3, targetPoint: Vec3): BlockPos[] | null;
    // private updateCurrentTarget(): void;
    // private updateSurroundings(initialPosition: BlockPos): boolean;
    // private validateCurrentTarget(possibleBlocks: BlockPos[]): void;
}