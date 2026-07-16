import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export class BlockPosOffsets extends Enum<BlockPosOffsets> {
    static DOWN: BlockPosOffsets;
    static FULL: BlockPosOffsets;
    static NORMAL: BlockPosOffsets;
    static NO_OFFSET: BlockPosOffsets;
    static getEntries(): BlockPosOffsets[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): BlockPosOffsets;
    static values(): BlockPosOffsets[];
    private constructor(offsets: BlockPos[])
    readonly offsets: BlockPos[];
    containsOffset(x: number, y: number, z: number): boolean;
    name(): "NO_OFFSET" | "NORMAL" | "DOWN" | "FULL";
}