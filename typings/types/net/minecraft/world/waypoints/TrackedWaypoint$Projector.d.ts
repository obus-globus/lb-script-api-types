import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface TrackedWaypoint$Projector extends Object{
    projectHorizonToScreen(): number;
    projectPointToScreen(point: Vec3): Vec3;
}