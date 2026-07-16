import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
export class BlockModelLighter$AmbientVertexRemap extends Enum<BlockModelLighter$AmbientVertexRemap> {
    static DOWN: BlockModelLighter$AmbientVertexRemap;
    static EAST: BlockModelLighter$AmbientVertexRemap;
    static NORTH: BlockModelLighter$AmbientVertexRemap;
    static SOUTH: BlockModelLighter$AmbientVertexRemap;
    static UP: BlockModelLighter$AmbientVertexRemap;
    static WEST: BlockModelLighter$AmbientVertexRemap;
    static fromFacing(paramdirection: Direction): BlockModelLighter$AmbientVertexRemap;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BlockModelLighter$AmbientVertexRemap;
    static values(): BlockModelLighter$AmbientVertexRemap[];
    private constructor(vert0: number, vert1: number, vert2: number, vert3: number)
    // private vert0: number;
    // private vert1: number;
    // private vert2: number;
    // private vert3: number;
    name(): "DOWN" | "UP" | "NORTH" | "SOUTH" | "WEST" | "EAST";
}