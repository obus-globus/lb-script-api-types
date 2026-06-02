import type { Vec3i } from '../../../../../com/seedfinding/mccore/util/math/Vec3i.d.ts'
import type { BPos } from '../../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { CPos } from '../../../../../com/seedfinding/mccore/util/pos/CPos.d.ts'
export class RPos extends Vec3i {
    static ZERO: Vec3i;
    constructor(arg0: number, arg1: number, arg2: number)
    readonly regionSize: number;
    add(arg0: CPos): RPos;
    add(arg0: number, arg1: number): RPos;
    changeRegionSize(arg0: number): RPos;
    getRegionSize(): number;
    shl(arg0: number): RPos;
    shl(arg0: number, arg1: number): RPos;
    shr(arg0: number): RPos;
    shr(arg0: number, arg1: number): RPos;
    subtract(arg0: CPos): RPos;
    subtract(arg0: number, arg1: number): RPos;
    toBlockPos(): BPos;
    toChunkPos(): CPos;
}