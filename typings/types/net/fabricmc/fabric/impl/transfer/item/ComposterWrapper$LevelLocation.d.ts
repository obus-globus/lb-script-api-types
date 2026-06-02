import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ComposterWrapper$LevelLocation extends Record {
    private constructor(level: Level, pos: BlockPos)
    // private level: Level;
    // private pos: BlockPos;
    equals(arg0: Object | null): boolean;
    // private getBlockState(): BlockState;
    hashCode(): number;
    level(): Level;
    pos(): BlockPos;
    // private setBlockState(arg0: BlockState): void;
    toString(): string;
}