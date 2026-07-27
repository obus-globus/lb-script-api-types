import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyedAabb } from '../../../../../net/ccbluex/liquidbounce/utils/math/KeyedAabb.d.ts'
export class AabbMergeUtilKt extends Object {
    /**
     * Merge transitive intersecting AABBs using sweep-and-prune broadphase + union-find.
     *
     * Intersection uses vanilla {@link AABB.intersects} semantics (strict overlap, no touching-only merge).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/AabbMergeUtil.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/AabbMergeUtil.kt:43}
     */
    static mergeIntersectingAabbsSweep<K extends unknown>(items: KeyedAabb<K>[]): KeyedAabb<K>[];
}