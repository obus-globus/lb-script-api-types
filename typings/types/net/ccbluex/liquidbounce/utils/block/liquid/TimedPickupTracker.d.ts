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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt:29}
 */
export class TimedPickupTracker extends Object {
    constructor(capacity: number, nowProvider: () => number)
    // private capacity: number;
    // private nowProvider: () => number;
    // private trackedPositions: TimedPickupTracker$TrackedPos[];
    /**
     * Removes all tracked entries.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt:51}
     */
    clear(): void;
    /**
     * Returns the oldest tracked position whose age is strictly greater than {@link minDelayMs} and
     * satisfies {@link predicate}, or `null`.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt#L84 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt:84}
     */
    firstEligible(minDelayMs: number, predicate: (param0: BlockPos) => boolean): BlockPos | null;
    /**
     * Removes entries that are older than {@link maxDelayMs} or fail {@link isPickupable}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt:74}
     */
    prune(maxDelayMs: number, isPickupable: (param0: BlockPos) => boolean): void;
    /**
     * Records a position at current time.
     * If the tracker is full, the oldest entry is removed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.kt:58}
     */
    record(pos: BlockPos): void;
}