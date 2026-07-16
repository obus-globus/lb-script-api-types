import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export class BlockPosOffsets extends Enum<BlockPosOffsets> {
    static DOWN: BlockPosOffsets;
    static FULL: BlockPosOffsets;
    static NORMAL: BlockPosOffsets;
    static NO_OFFSET: BlockPosOffsets;
    static getEntries(): BlockPosOffsets[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BlockPosOffsets;
    static values(): BlockPosOffsets[];
    private constructor(offsets: BlockPos[])
    readonly offsets: BlockPos[];
    containsOffset(x: number, y: number, z: number): boolean;
    name(): "NO_OFFSET" | "NORMAL" | "DOWN" | "FULL";
}