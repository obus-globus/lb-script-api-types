import type { OctahedralGroup } from '../../../../../com/mojang/math/OctahedralGroup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { AttachFace } from '../../../../../net/minecraft/world/level/block/state/properties/AttachFace.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { BooleanOp } from '../../../../../net/minecraft/world/phys/shapes/BooleanOp.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class Shapes extends Object {
    static BIG_EPSILON: number;
    static EPSILON: number;
    static INFINITY: VoxelShape;
    static block(): VoxelShape;
    static blockOccludes(paramshape: VoxelShape, paramoccluder: VoxelShape, paramdirection: Direction): boolean;
    static box(paramminX: number, paramminY: number, paramminZ: number, parammaxX: number, parammaxY: number, parammaxZ: number): VoxelShape;
    static collide(paramaxis: Direction$Axis, parammoving: AABB, paramshapes: VoxelShape[], paramdistance: number): number;
    static create(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): VoxelShape;
    static create(paramaabb: AABB): VoxelShape;
    static empty(): VoxelShape;
    static equal(paramfirst: VoxelShape, paramsecond: VoxelShape): boolean;
    static faceShapeOccludes(paramshape: VoxelShape, paramoccluder: VoxelShape): boolean;
    static findBits(parammin: number, parammax: number): number;
    static join(paramfirst: VoxelShape, paramsecond: VoxelShape, paramop: BooleanOp): VoxelShape;
    static joinIsNotEmpty(paramfirst: VoxelShape, paramsecond: VoxelShape, paramop: BooleanOp): boolean;
    static joinUnoptimized(paramfirst: VoxelShape, paramsecond: VoxelShape, paramop: BooleanOp): VoxelShape;
    static mergedFaceOccludes(paramshape: VoxelShape, paramoccluder: VoxelShape, paramdirection: Direction): boolean;
    static or(paramfirst: VoxelShape, paramsecond: VoxelShape): VoxelShape;
    static or(paramfirst: VoxelShape, ...paramtail: (Object | null)[]): VoxelShape;
    static rotate(paramshape: VoxelShape, paramrotation: OctahedralGroup): VoxelShape;
    static rotate(paramshape: VoxelShape, paramrotation: OctahedralGroup, paramrotationPoint: Vec3): VoxelShape;
    static rotateAll(paramnorth: VoxelShape): { [key in Direction]: VoxelShape };
    static rotateAll(paramnorth: VoxelShape, paraminitial: OctahedralGroup, paramrotationCenter: Vec3): { [key in Direction]: VoxelShape };
    static rotateAll(paramnorth: VoxelShape, paramrotationCenter: Vec3): { [key in Direction]: VoxelShape };
    static rotateAllAxis(paramnorth: VoxelShape): { [key in Direction$Axis]: VoxelShape };
    static rotateAllAxis(paramnorth: VoxelShape, paramrotationCenter: Vec3): { [key in Direction$Axis]: VoxelShape };
    static rotateAttachFace(paramnorth: VoxelShape): { [key in AttachFace]: { [key in Direction]: VoxelShape } };
    static rotateAttachFace(paramnorth: VoxelShape, paraminitial: OctahedralGroup): { [key in AttachFace]: { [key in Direction]: VoxelShape } };
    static rotateHorizontal(paramnorth: VoxelShape): { [key in Direction]: VoxelShape };
    static rotateHorizontal(paramnorth: VoxelShape, paraminitial: OctahedralGroup): { [key in Direction]: VoxelShape };
    static rotateHorizontal(paramnorth: VoxelShape, paraminitial: OctahedralGroup, paramrotationCenter: Vec3): { [key in Direction]: VoxelShape };
    static rotateHorizontalAxis(paramzAxis: VoxelShape): { [key in Direction$Axis]: VoxelShape };
    static rotateHorizontalAxis(paramzAxis: VoxelShape, paramrotationCenter: Vec3): { [key in Direction$Axis]: VoxelShape };
    constructor()
}