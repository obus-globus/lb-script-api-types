import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class CloneCommands$DimensionAndPosition extends Record {
    private constructor(dimension: ServerLevel, position: BlockPos)
    // private dimension: ServerLevel;
    // private position: BlockPos;
    dimension(): ServerLevel;
    equals(o: Object | null): boolean;
    hashCode(): number;
    position(): BlockPos;
    toString(): string;
}