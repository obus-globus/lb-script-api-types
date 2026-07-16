import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { BlockModelLighter$SizeInfo } from '../../../../../net/minecraft/client/renderer/block/BlockModelLighter$SizeInfo.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
export class BlockModelLighter$AdjacencyInfo extends Enum<BlockModelLighter$AdjacencyInfo> {
    static DOWN: BlockModelLighter$AdjacencyInfo;
    static EAST: BlockModelLighter$AdjacencyInfo;
    static NORTH: BlockModelLighter$AdjacencyInfo;
    static SOUTH: BlockModelLighter$AdjacencyInfo;
    static UP: BlockModelLighter$AdjacencyInfo;
    static WEST: BlockModelLighter$AdjacencyInfo;
    static fromFacing(paramdirection: Direction): BlockModelLighter$AdjacencyInfo;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BlockModelLighter$AdjacencyInfo;
    static values(): BlockModelLighter$AdjacencyInfo[];
    private constructor(corners: Direction[], shadeWeight: number, doNonCubicWeight: boolean, vert0Weights: BlockModelLighter$SizeInfo[], vert1Weights: BlockModelLighter$SizeInfo[], vert2Weights: BlockModelLighter$SizeInfo[], vert3Weights: BlockModelLighter$SizeInfo[])
    // private corners: Direction[];
    // private doNonCubicWeight: boolean;
    // private vert0Weights: BlockModelLighter$SizeInfo[];
    // private vert1Weights: BlockModelLighter$SizeInfo[];
    // private vert2Weights: BlockModelLighter$SizeInfo[];
    // private vert3Weights: BlockModelLighter$SizeInfo[];
    name(): "DOWN" | "UP" | "NORTH" | "SOUTH" | "WEST" | "EAST";
}