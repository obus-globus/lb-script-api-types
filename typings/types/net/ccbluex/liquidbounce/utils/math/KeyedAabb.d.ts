import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
/**
 * A world-space AABB tagged with a merge key.
 * Only boxes with equal keys are allowed to be merged.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/AabbMergeUtil.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/AabbMergeUtil.kt:32}
 */
export class KeyedAabb<K extends unknown> extends Record {
    constructor(box: AABB, key: K)
    // private box: AABB;
    /*not mapped: */ box(): AABB;
    // private key: K;
    /*not mapped: */ key(): K;
    component1(): AABB;
    component2(): K;
    copy(box: AABB, key: K): KeyedAabb<K>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}