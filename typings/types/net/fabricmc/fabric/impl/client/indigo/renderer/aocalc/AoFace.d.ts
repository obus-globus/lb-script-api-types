import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { QuadViewImpl } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/mesh/QuadViewImpl.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export class AoFace extends Enum<AoFace> {
    static DOWN: AoFace;
    static EAST: AoFace;
    static NORTH: AoFace;
    static SOUTH: AoFace;
    static UP: AoFace;
    static WEST: AoFace;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AoFace;
    static values(): AoFace[];
    private constructor(arg2: Direction[], arg3: number[])
    // private neighbors: Direction[];
    // private vertexMap: number[];
    computeCornerWeights(arg0: QuadViewImpl, arg1: number, arg2: number[]): void;
    computeDepth(arg0: QuadViewImpl, arg1: number): number;
    name(): "DOWN" | "UP" | "NORTH" | "SOUTH" | "WEST" | "EAST";
}