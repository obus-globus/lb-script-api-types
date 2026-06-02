import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { GlobalPos } from '../../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { TransportItemsBetweenContainers$ContainerInteractionState } from '../../../../../../net/minecraft/world/entity/ai/behavior/TransportItemsBetweenContainers$ContainerInteractionState.d.ts'
import type { TransportItemsBetweenContainers$OnTargetReachedInteraction } from '../../../../../../net/minecraft/world/entity/ai/behavior/TransportItemsBetweenContainers$OnTargetReachedInteraction.d.ts'
import type { TransportItemsBetweenContainers$TransportItemState } from '../../../../../../net/minecraft/world/entity/ai/behavior/TransportItemsBetweenContainers$TransportItemState.d.ts'
import type { TransportItemsBetweenContainers$TransportItemTarget } from '../../../../../../net/minecraft/world/entity/ai/behavior/TransportItemsBetweenContainers$TransportItemTarget.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Path } from '../../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TransportItemsBetweenContainers extends Behavior<PathfinderMob> {
    static DEFAULT_DURATION: number;
    static TARGET_INTERACTION_TIME: number;
    constructor(speedModifier: number, sourceBlockType: (param0: BlockState) => kotlin.Boolean, destinationBlockType: (param0: BlockState) => kotlin.Boolean, horizontalSearchDistance: number, verticalSearchDistance: number, onTargetInteractionActions: { [key in TransportItemsBetweenContainers$ContainerInteractionState]: (param0: Object | null, param1: Object | null, param2: Object | null) => void }, onStartTravelling: (param0: PathfinderMob) => void, shouldQueueForTarget: (param0: TransportItemsBetweenContainers$TransportItemTarget) => kotlin.Boolean)
    // private destinationBlockType: (param0: BlockState) => kotlin.Boolean;
    // private horizontalSearchDistance: number;
    // private interactionState: TransportItemsBetweenContainers$ContainerInteractionState;
    // private onStartTravelling: (param0: PathfinderMob) => void;
    // private onTargetInteractionActions: { [key in TransportItemsBetweenContainers$ContainerInteractionState]: (param0: Object | null, param1: Object | null, param2: Object | null) => void };
    // private shouldQueueForTarget: (param0: TransportItemsBetweenContainers$TransportItemTarget) => kotlin.Boolean;
    // private sourceBlockType: (param0: BlockState) => kotlin.Boolean;
    // private speedModifier: number;
    // private state: TransportItemsBetweenContainers$TransportItemState;
    // private target: TransportItemsBetweenContainers$TransportItemTarget;
    // private ticksSinceReachingTarget: number;
    // private verticalSearchDistance: number;
    // private canSeeAnyTargetSide(target: TransportItemsBetweenContainers$TransportItemTarget, level: Level, body: PathfinderMob, eyePosition: Vec3): boolean;
    canStillUse(level: ServerLevel, body: PathfinderMob, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: PathfinderMob): boolean;
    clearMemoriesAfterMatchingTargetFound(body: PathfinderMob): void;
    // private doReachedTargetInteraction(body: PathfinderMob, container: ItemStack[], onPickupSuccess: (param0: PathfinderMob, param1: ItemStack[]) => void, onPickupFailure: (param0: PathfinderMob, param1: ItemStack[]) => void, onPlaceSuccess: (param0: PathfinderMob, param1: ItemStack[]) => void, onPlaceFailure: (param0: PathfinderMob, param1: ItemStack[]) => void): void;
    // private enterCooldownAfterNoMatchingTargetFound(body: PathfinderMob): void;
    // private getCenterPos(body: PathfinderMob): Vec3;
    // private getConnectedTargets(target: TransportItemsBetweenContainers$TransportItemTarget, level: Level): Stream<TransportItemsBetweenContainers$TransportItemTarget>;
    // private getHorizontalSearchDistance(mob: PathfinderMob): number;
    // private getPositionToReachTargetFrom(path: Path, body: PathfinderMob): Vec3;
    // private getTargetSearchArea(mob: PathfinderMob): AABB;
    // private getTransportTarget(level: ServerLevel, body: PathfinderMob): Optional<TransportItemsBetweenContainers$TransportItemTarget>;
    // private getVerticalSearchDistance(mob: PathfinderMob): number;
    // private hasValidTarget(level: Level, body: PathfinderMob): boolean;
    // private hasValidTravellingPath(level: Level, target: TransportItemsBetweenContainers$TransportItemTarget, body: PathfinderMob): boolean;
    // private isAnotherMobInteractingWithTarget(target: TransportItemsBetweenContainers$TransportItemTarget, level: Level): boolean;
    // private isContainerLocked(transportItemTarget: TransportItemsBetweenContainers$TransportItemTarget): boolean;
    // private isPositionAlreadyVisited(visitedPositions: GlobalPos[], unreachablePositions: GlobalPos[], target: TransportItemsBetweenContainers$TransportItemTarget, level: Level): boolean;
    // private isTargetBlocked(level: Level, target: TransportItemsBetweenContainers$TransportItemTarget): boolean;
    // private isTargetValidToPick(body: PathfinderMob, level: Level, blockEntity: BlockEntity, visitedPositions: GlobalPos[], unreachablePositions: GlobalPos[], targetBlockSearchArea: AABB): TransportItemsBetweenContainers$TransportItemTarget;
    // private isWantedBlock(mob: PathfinderMob, block: BlockState): boolean;
    // private isWithinTargetDistance(distance: number, target: TransportItemsBetweenContainers$TransportItemTarget, level: Level, body: PathfinderMob, fromPos: Vec3): boolean;
    markVisitedBlockPosAsUnreachable(body: PathfinderMob, level: Level, target: BlockPos): void;
    // private onQueuingForTarget(target: TransportItemsBetweenContainers$TransportItemTarget, level: Level, body: PathfinderMob): void;
    // private onReachedInteraction(state: TransportItemsBetweenContainers$ContainerInteractionState): (param0: PathfinderMob, param1: ItemStack[]) => void;
    onReachedTarget(target: TransportItemsBetweenContainers$TransportItemTarget, level: Level, body: PathfinderMob): void;
    // private onStartTravelling(body: PathfinderMob): void;
    // private onTargetInteraction(target: TransportItemsBetweenContainers$TransportItemTarget, body: PathfinderMob): void;
    onTravelToTarget(target: TransportItemsBetweenContainers$TransportItemTarget, level: Level, body: PathfinderMob): void;
    // private pickUpItems(body: PathfinderMob, container: ItemStack[]): void;
    // private putDownItem(body: PathfinderMob, container: ItemStack[]): void;
    // private resumeTravelling(body: PathfinderMob): void;
    // private setInteractionState(state: TransportItemsBetweenContainers$ContainerInteractionState): void;
    // private setMiddleYPosition(body: PathfinderMob, pos: Vec3): Vec3;
    // private setTransportingState(state: TransportItemsBetweenContainers$TransportItemState): void;
    setVisitedBlockPos(body: PathfinderMob, level: Level, target: BlockPos): void;
    start(level: ServerLevel, body: PathfinderMob, timestamp: number): void;
    // private startOnReachedTargetInteraction(target: TransportItemsBetweenContainers$TransportItemTarget, body: PathfinderMob): void;
    // private startQueuing(body: PathfinderMob): void;
    stop(level: ServerLevel, body: PathfinderMob, timestamp: number): void;
    // private stopInPlace(mob: PathfinderMob): void;
    stopTargetingCurrentTarget(body: PathfinderMob): void;
    // private targetHasNotChanged(level: Level, target: TransportItemsBetweenContainers$TransportItemTarget): boolean;
    // private targetIsReachableFromPosition(level: Level, canReachTarget: boolean, pos: Vec3, target: TransportItemsBetweenContainers$TransportItemTarget, body: PathfinderMob): boolean;
    tick(level: ServerLevel, body: PathfinderMob, timestamp: number): void;
    timedOut(timestamp: number): boolean;
    // private updateInvalidTarget(level: ServerLevel, body: PathfinderMob): boolean;
    // private walkTowardsTarget(body: PathfinderMob): void;
}