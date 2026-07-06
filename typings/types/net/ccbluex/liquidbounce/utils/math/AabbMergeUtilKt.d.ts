import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyedAabb } from '../../../../../net/ccbluex/liquidbounce/utils/math/KeyedAabb.d.ts'
export class AabbMergeUtilKt extends Object {
    /**
     * Merge transitive intersecting AABBs using sweep-and-prune broadphase + union-find.
     *
     * Intersection uses vanilla {@link AABB.intersects} semantics (strict overlap, no touching-only merge).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/AabbMergeUtil.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/AabbMergeUtil.kt:43}
     */
    static mergeIntersectingAabbsSweep(items: KeyedAabb<Object>[]): KeyedAabb<Object>[];
}