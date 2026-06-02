import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface VisibilityPredicate extends Object{
    isVisible(eyesPos: Vec3, targetSpot: Vec3): boolean;
}