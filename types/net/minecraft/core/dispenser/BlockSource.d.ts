import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlockSource extends Record {
    constructor(level: ServerLevel, pos: BlockPos, state: BlockState, blockEntity: (Object | null)[])
    // private blockEntity: (Object | null)[];
    // private level: ServerLevel;
    // private pos: BlockPos;
    // private state: BlockState;
    blockEntity(): (Object | null)[];
    center(): Vec3;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): ServerLevel;
    pos(): BlockPos;
    state(): BlockState;
    toString(): string;
}