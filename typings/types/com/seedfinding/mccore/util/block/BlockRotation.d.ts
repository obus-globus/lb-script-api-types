import type { BlockDirection } from '../../../../../com/seedfinding/mccore/util/block/BlockDirection.d.ts'
import type { BPos } from '../../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { JRand } from '../../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BlockRotation extends Enum<BlockRotation> {
    static CLOCKWISE_180: BlockRotation;
    static CLOCKWISE_90: BlockRotation;
    static COUNTERCLOCKWISE_90: BlockRotation;
    static NONE: BlockRotation;
    static getRandom(paramarg0: JRand): BlockRotation;
    static getShuffled(paramarg0: JRand): BlockRotation[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BlockRotation;
    static values(): BlockRotation[];
    private constructor(arg2: BlockDirection)
    readonly direction: BlockDirection;
    getDirection(): BlockDirection;
    getRotated(arg0: BlockRotation): BlockRotation;
    getSize(arg0: BPos): BPos;
    rotate(arg0: BlockDirection): BlockDirection;
    rotate(arg0: BPos, arg1: BPos): BPos;
    rotate(arg0: number, arg1: number): number;
    toString(): string;
    name(): "NONE" | "CLOCKWISE_90" | "CLOCKWISE_180" | "COUNTERCLOCKWISE_90";
}