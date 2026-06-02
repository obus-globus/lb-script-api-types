import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VisibilityPredicate } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/utils/VisibilityPredicate.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class VisibilityPredicate$Collider extends Object implements VisibilityPredicate {
    static INSTANCE: VisibilityPredicate$Collider;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isVisible(eyesPos: Vec3, targetSpot: Vec3): boolean;
    toString(): string;
}