import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
export class MultifaceSpreader$SpreadPos extends Record {
    constructor(pos: BlockPos, face: Direction)
    // private face: Direction;
    // private pos: BlockPos;
    equals(o: Object | null): boolean;
    face(): Direction;
    hashCode(): number;
    pos(): BlockPos;
    toString(): string;
}