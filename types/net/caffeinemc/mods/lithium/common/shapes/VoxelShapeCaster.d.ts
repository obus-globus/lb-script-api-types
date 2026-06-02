import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
export interface VoxelShapeCaster extends Object{
    intersects(arg0: AABB, arg1: number, arg2: number, arg3: number): boolean;
}