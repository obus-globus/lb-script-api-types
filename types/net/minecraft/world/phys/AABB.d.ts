import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { BoundingBox } from '../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class AABB extends Object {
    static clip(paramminX: number, paramminY: number, paramminZ: number, parammaxX: number, parammaxY: number, parammaxZ: number, paramfrom: Vec3, paramto: Vec3): Optional<Vec3>;
    static clip(paramaabBs: AABB[], paramfrom: Vec3, paramto: Vec3, parampos: BlockPos): BlockHitResult;
    static encapsulatingFullBlocks(parampos0: BlockPos, parampos1: BlockPos): AABB;
    static getDirection(paramaabb: AABB, paramfrom: Vec3, paramscaleReference: number[], paramdirection: Direction, paramdx: number, paramdy: number, paramdz: number): Direction;
    static of(parambox: BoundingBox): AABB;
    static ofSize(paramcenter: Vec3, paramsizeX: number, paramsizeY: number, paramsizeZ: number): AABB;
    static unitCubeFromLowerCorner(parampos: Vec3): AABB;
    constructor(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number)
    constructor(pos: BlockPos)
    constructor(begin: Vec3, end: Vec3)
    maxX: number;
    maxY: number;
    maxZ: number;
    minX: number;
    minY: number;
    minZ: number;
    clip(from: Vec3, to: Vec3): Optional<Vec3>;
    collidedAlongVector(vector: Vec3, aabbs: AABB[]): boolean;
    contains(x: number, y: number, z: number): boolean;
    contains(vec: Vec3): boolean;
    contract(xa: number, ya: number, za: number): AABB;
    deflate(amount: number): AABB;
    deflate(xSubstract: number, ySubtract: number, zSubtract: number): AABB;
    distanceToSqr(boundingBox: AABB): number;
    distanceToSqr(point: Vec3): number;
    equals(o: Object | null): boolean;
    expandTowards(xa: number, ya: number, za: number): AABB;
    expandTowards(delta: Vec3): AABB;
    getBottomCenter(): Vec3;
    getCenter(): Vec3;
    getMaxPosition(): Vec3;
    getMinPosition(): Vec3;
    getSize(): number;
    getXsize(): number;
    getYsize(): number;
    getZsize(): number;
    hasNaN(): boolean;
    hashCode(): number;
    inflate(amountToAddInAllDirections: number): AABB;
    inflate(xAdd: number, yAdd: number, zAdd: number): AABB;
    intersect(other: AABB): AABB;
    intersects(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): boolean;
    intersects(pos: BlockPos): boolean;
    intersects(aabb: AABB): boolean;
    intersects(min: Vec3, max: Vec3): boolean;
    max(arg0: Direction$Axis): number;
    min(arg0: Direction$Axis): number;
    minmax(other: AABB): AABB;
    move(xa: number, ya: number, za: number): AABB;
    move(pos: BlockPos): AABB;
    move(pos: Vec3): AABB;
    move(pos: Vector3f): AABB;
    setMaxX(maxX: number): AABB;
    setMaxY(maxY: number): AABB;
    setMaxZ(maxZ: number): AABB;
    setMinX(minX: number): AABB;
    setMinY(minY: number): AABB;
    setMinZ(minZ: number): AABB;
    toString(): string;
}