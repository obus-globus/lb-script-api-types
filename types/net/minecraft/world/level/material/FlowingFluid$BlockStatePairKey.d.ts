import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class FlowingFluid$BlockStatePairKey extends Record {
    constructor(first: BlockState, second: BlockState, direction: Direction)
    // private direction: Direction;
    // private first: BlockState;
    // private hash: number;
    // private second: BlockState;
    direction(): Direction;
    equals(o: Object | null): boolean;
    first(): BlockState;
    hashCode(): number;
    second(): BlockState;
    toString(): string;
}