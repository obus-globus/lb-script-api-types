import type { LongSupplier } from '../../../../../../java/util/function/LongSupplier.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TimedPickupTracker$TrackedPos } from '../../../../../../net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker$TrackedPos.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Tracks recently placed liquid positions and provides pickup queries by time window.
 *
 * @param capacity maximum number of tracked entries; oldest entries are discarded first
 * @param nowProvider clock source used for timestamping and elapsed checks
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt:35}
 */
export class TimedPickupTracker extends Object {
    constructor(capacity: number, nowProvider?: () => number)
    // private capacity: number;
    // private nowProvider: () => number;
    // private trackedPositions: TimedPickupTracker$TrackedPos[];
    /**
     * Removes all tracked entries.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt:54}
     */
    clear(): void;
    /**
     * Returns the oldest tracked position whose age is strictly greater than {@link minDelayMs} and
     * satisfies {@link predicate}, or `null`.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt#L88 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt:88}
     */
    firstEligible(minDelayMs: number, predicate?: (param0: BlockPos) => boolean): BlockPos | null;
    /**
     * Removes entries that are older than {@link maxDelayMs} or fail {@link isPickupable}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt:77}
     */
    prune(maxDelayMs: number, isPickupable: (param0: BlockPos) => boolean): void;
    /**
     * Records a position at current time.
     * If the tracker is full, the oldest entry is removed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt:62}
     */
    record(pos: BlockPos): void;
}