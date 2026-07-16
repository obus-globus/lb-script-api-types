import type { BlockDirection$Axis } from '../../../../../com/seedfinding/mccore/util/block/BlockDirection$Axis.d.ts'
import type { BlockRotation } from '../../../../../com/seedfinding/mccore/util/block/BlockRotation.d.ts'
import type { Vec3i } from '../../../../../com/seedfinding/mccore/util/math/Vec3i.d.ts'
import type { JRand } from '../../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BlockDirection extends Enum<BlockDirection> {
    static DOWN: BlockDirection;
    static EAST: BlockDirection;
    static NORTH: BlockDirection;
    static SOUTH: BlockDirection;
    static UP: BlockDirection;
    static WEST: BlockDirection;
    static fromString(paramarg0: string): BlockDirection;
    static get2d(): BlockDirection[];
    static getHorizontal(): BlockDirection[];
    static getRandom(paramarg0: JRand): BlockDirection;
    static getShuffled(paramarg0: JRand): BlockDirection[];
    static random2D(paramarg0: JRand): BlockDirection;
    static randomHorizontal(paramarg0: JRand): BlockDirection;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BlockDirection;
    static values(): BlockDirection[];
    private constructor(arg2: BlockDirection$Axis, arg3: Vec3i)
    readonly axis: BlockDirection$Axis;
    // private vec: Vec3i;
    getAxis(): BlockDirection$Axis;
    getClockWise(): BlockDirection;
    getCounterClockWise(): BlockDirection;
    // private getDirection(arg0: BlockDirection, arg1: BlockDirection, arg2: BlockDirection, arg3: BlockDirection): BlockDirection;
    getOpposite(): BlockDirection;
    getRotation(): BlockRotation;
    getVector(): Vec3i;
    toString(): string;
    name(): "DOWN" | "UP" | "NORTH" | "SOUTH" | "WEST" | "EAST";
}