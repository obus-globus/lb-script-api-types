import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BlockModelLighter$SizeInfo extends Enum<BlockModelLighter$SizeInfo> {
    static COUNT: number;
    static DOWN: BlockModelLighter$SizeInfo;
    static EAST: BlockModelLighter$SizeInfo;
    static FLIP_DOWN: BlockModelLighter$SizeInfo;
    static FLIP_EAST: BlockModelLighter$SizeInfo;
    static FLIP_NORTH: BlockModelLighter$SizeInfo;
    static FLIP_SOUTH: BlockModelLighter$SizeInfo;
    static FLIP_UP: BlockModelLighter$SizeInfo;
    static FLIP_WEST: BlockModelLighter$SizeInfo;
    static NORTH: BlockModelLighter$SizeInfo;
    static SOUTH: BlockModelLighter$SizeInfo;
    static UP: BlockModelLighter$SizeInfo;
    static WEST: BlockModelLighter$SizeInfo;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BlockModelLighter$SizeInfo;
    static values(): BlockModelLighter$SizeInfo[];
    private constructor(index: number)
    // private index: number;
    name(): "DOWN" | "UP" | "NORTH" | "SOUTH" | "WEST" | "EAST" | "FLIP_DOWN" | "FLIP_UP" | "FLIP_NORTH" | "FLIP_SOUTH" | "FLIP_WEST" | "FLIP_EAST";
}