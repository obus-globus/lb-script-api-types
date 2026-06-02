import type { Vec3i } from '../../../../../com/seedfinding/mccore/util/math/Vec3i.d.ts'
import type { BPos } from '../../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { RPos } from '../../../../../com/seedfinding/mccore/util/pos/RPos.d.ts'
export class CPos extends Vec3i {
    static ZERO: Vec3i;
    constructor(arg0: Vec3i)
    constructor(arg0: number, arg1: number)
    add(arg0: CPos): CPos;
    add(arg0: number, arg1: number): CPos;
    shl(arg0: number): CPos;
    shl(arg0: number, arg1: number): CPos;
    shr(arg0: number): CPos;
    shr(arg0: number, arg1: number): CPos;
    subtract(arg0: CPos): CPos;
    subtract(arg0: number, arg1: number): CPos;
    toBlockPos(): BPos;
    toBlockPos(arg0: number): BPos;
    toRegionPos(arg0: number): RPos;
}