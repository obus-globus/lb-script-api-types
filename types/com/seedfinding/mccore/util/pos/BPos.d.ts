import type { BlockDirection } from '../../../../../com/seedfinding/mccore/util/block/BlockDirection.d.ts'
import type { BlockDirection$Axis } from '../../../../../com/seedfinding/mccore/util/block/BlockDirection$Axis.d.ts'
import type { BlockMirror } from '../../../../../com/seedfinding/mccore/util/block/BlockMirror.d.ts'
import type { BlockRotation } from '../../../../../com/seedfinding/mccore/util/block/BlockRotation.d.ts'
import type { Vec3i } from '../../../../../com/seedfinding/mccore/util/math/Vec3i.d.ts'
import type { CPos } from '../../../../../com/seedfinding/mccore/util/pos/CPos.d.ts'
import type { RPos } from '../../../../../com/seedfinding/mccore/util/pos/RPos.d.ts'
export class BPos extends Vec3i {
    static ORIGIN: BPos;
    static ZERO: Vec3i;
    constructor(arg0: Vec3i)
    constructor(arg0: number, arg1: number, arg2: number)
    add(arg0: BPos): BPos;
    add(arg0: number, arg1: number, arg2: number): BPos;
    relative(arg0: BlockDirection): BPos;
    relative(arg0: BlockDirection, arg1: number): BPos;
    relative(arg0: BlockDirection$Axis, arg1: number): BPos;
    shl(arg0: number): BPos;
    shl(arg0: number, arg1: number, arg2: number): BPos;
    shr(arg0: number): BPos;
    shr(arg0: number, arg1: number, arg2: number): BPos;
    subtract(arg0: BPos): BPos;
    subtract(arg0: number, arg1: number, arg2: number): BPos;
    toChunkCorner(): BPos;
    toChunkPos(): CPos;
    toRegionPos(arg0: number): RPos;
    transform(arg0: BlockMirror, arg1: BlockRotation, arg2: BPos): BPos;
}