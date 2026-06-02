import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface IAbstractBoat extends Object{
    viaFabricPlus$getBoatVelocity(): Vec3;
    viaFabricPlus$setBoatInterpolationSteps(arg0: number): void;
    viaFabricPlus$setBoatVelocity(arg0: Vec3): void;
}