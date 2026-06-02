import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { PathType } from '../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Node extends Object {
    static createFromStream(parambuffer: FriendlyByteBuf): Node;
    static createHash(paramx: number, paramy: number, paramz: number): number;
    constructor(x: number, y: number, z: number)
    cameFrom: Node;
    closed: boolean;
    costMalus: number;
    f: number;
    g: number;
    h: number;
    // private hash: number;
    heapIdx: number;
    type: PathType;
    walkedDistance: number;
    x: number;
    y: number;
    z: number;
    asBlockPos(): BlockPos;
    asVec3(): Vec3;
    cloneAndMove(x: number, y: number, z: number): Node;
    distanceManhattan(pos: BlockPos): number;
    distanceManhattan(to: Node): number;
    distanceTo(pos: BlockPos): number;
    distanceTo(to: Node): number;
    distanceToSqr(pos: BlockPos): number;
    distanceToSqr(to: Node): number;
    distanceToXZ(to: Node): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    inOpenSet(): boolean;
    toString(): string;
    writeToStream(buffer: FriendlyByteBuf): void;
}