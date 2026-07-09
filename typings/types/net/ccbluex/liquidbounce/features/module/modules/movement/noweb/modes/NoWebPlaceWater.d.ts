import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { NoWebMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noweb/NoWebMode.d.ts'
import type { NoWebPlaceWater$UseAction } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebPlaceWater$UseAction.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { TimedPickupTracker } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockHitResult } from '../../../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * TODO: fix water fluid not spread to break the cobweb
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebPlaceWater.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebPlaceWater.kt:62}
 */
export class NoWebPlaceWater extends NoWebMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoWebPlaceWater;
    // private MAX_TRACKED_WEBS: number;
    // private PICKUP_TRACKER_CAPACITY: number;
    // private SAME_WEB_RETRY_DELAY_MS: number;
    // private currentAction: NoWebPlaceWater$UseAction | null;
    // private lastSuccessfulAt: number;
    // private lastSuccessfulWeb: BlockPos | null;
    // private pickupTracker: TimedPickupTracker;
    // private rotationUpdateHandler: EventHook<RotationUpdateEvent>;
    // private rotations: RotationsValueGroup;
    // private tickHandler: EventHook<GameTickEvent>;
    // private trackedWebs: BlockPos[];
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private buildDirectionalPlaceAction(webPos: BlockPos, waterSlot: HotbarItemSlot, directions: Direction[]): NoWebPlaceWater$UseAction | null;
    // private buildPickupAction(): NoWebPlaceWater$UseAction | null;
    // private buildPlaceAction(webPos: BlockPos, waterSlot: HotbarItemSlot): NoWebPlaceWater$UseAction | null;
    // private buildTopPlaceAction(webPos: BlockPos, waterSlot: HotbarItemSlot): NoWebPlaceWater$UseAction | null;
    disable(): void;
    handleEntityCollision(pos: BlockPos): boolean;
    // private markWebPlacementSuccess(webPos: BlockPos): void;
    // private pickBestSide(webPos: BlockPos, directions: Direction[]): Direction | null;
    // private recordDirectionalWaterCandidates(webPos: BlockPos, side: Direction, placementHitResult: BlockHitResult): void;
    // private resetState(): void;
    // private resolveDirectionalPlacementHitResult(rayTraceResult: BlockHitResult, webPos: BlockPos, side: Direction, fallbackHitResult: BlockHitResult): BlockHitResult;
    // private resolvePickupHitResult(rayTraceResult: BlockHitResult, pickupPos: BlockPos, pickupCenter: Vec3): BlockHitResult;
}