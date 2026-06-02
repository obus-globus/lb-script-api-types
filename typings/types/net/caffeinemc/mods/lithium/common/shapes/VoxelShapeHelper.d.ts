import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class VoxelShapeHelper extends Object {
    static getClosestPointTo(paramarg0: Vec3, paramarg1: VoxelShape, paramarg2: AABB[]): Optional<Vec3>;
    constructor()
}