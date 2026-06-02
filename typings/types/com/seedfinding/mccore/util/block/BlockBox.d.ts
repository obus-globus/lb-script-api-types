import type { BlockMirror } from '../../../../../com/seedfinding/mccore/util/block/BlockMirror.d.ts'
import type { BlockRotation } from '../../../../../com/seedfinding/mccore/util/block/BlockRotation.d.ts'
import type { Vec3i } from '../../../../../com/seedfinding/mccore/util/math/Vec3i.d.ts'
import type { BPos } from '../../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlockBox extends Object {
    static empty(): BlockBox;
    static getBoundingBox(paramarg0: BPos, paramarg1: BlockRotation, paramarg2: BPos, paramarg3: BlockMirror, paramarg4: BPos): BlockBox;
    static rotated(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: BlockRotation): BlockBox;
    constructor(arg0: Vec3i, arg1: Vec3i)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    maxX: number;
    maxY: number;
    maxZ: number;
    minX: number;
    minY: number;
    minZ: number;
    contains(arg0: Vec3i): boolean;
    encompass(arg0: BlockBox): void;
    equals(arg0: Object | null): boolean;
    getCenter(): Vec3i;
    getDimensions(): Vec3i;
    getInside(arg0: BPos, arg1: BlockRotation): BPos;
    getRotated(arg0: BlockRotation): BlockBox;
    getXSpan(): number;
    getYSpan(): number;
    getZSpan(): number;
    hashCode(): number;
    intersects(arg0: BlockBox): boolean;
    intersectsXZ(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    move(arg0: number, arg1: number, arg2: number): void;
    offset(arg0: number, arg1: number, arg2: number): BlockBox;
    toString(): string;
}