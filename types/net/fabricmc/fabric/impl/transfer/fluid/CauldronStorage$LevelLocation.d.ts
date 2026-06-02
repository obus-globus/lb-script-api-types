import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class CauldronStorage$LevelLocation extends Record {
    private constructor(level: Level, pos: BlockPos)
    // private level: Level;
    // private pos: BlockPos;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    level(): Level;
    pos(): BlockPos;
    toString(): string;
}