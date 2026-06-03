import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AabbMergeUtilKt extends Object {
    /**
     * Merge transitive intersecting AABBs using sweep-and-prune broadphase + union-find.
     *
     * Intersection uses vanilla {@link AABB.intersects} semantics (strict overlap, no touching-only merge).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/AabbMergeUtil.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/AabbMergeUtil.kt:38}
     */
    static mergeIntersectingAabbsSweep(items: (Object | null)[]): (Object | null)[];
}