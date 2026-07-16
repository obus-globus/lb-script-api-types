import type { BlockDirection } from '../../../../../com/seedfinding/mccore/util/block/BlockDirection.d.ts'
import type { BlockRotation } from '../../../../../com/seedfinding/mccore/util/block/BlockRotation.d.ts'
import type { Vec3i } from '../../../../../com/seedfinding/mccore/util/math/Vec3i.d.ts'
import type { BPos } from '../../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BlockMirror extends Enum<BlockMirror> {
    static FRONT_BACK: BlockMirror;
    static LEFT_RIGHT: BlockMirror;
    static NONE: BlockMirror;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BlockMirror;
    static values(): BlockMirror[];
    private constructor(arg2: Vec3i)
    readonly orientation: Vec3i;
    getOrientation(): Vec3i;
    getRotation(arg0: BlockDirection): BlockRotation;
    mirror(arg0: BlockDirection): BlockDirection;
    mirror(arg0: BPos): BPos;
    mirror(arg0: number, arg1: number): number;
    toString(): string;
    name(): "NONE" | "LEFT_RIGHT" | "FRONT_BACK";
}