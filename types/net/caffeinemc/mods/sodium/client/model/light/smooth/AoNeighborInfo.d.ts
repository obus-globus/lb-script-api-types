import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export class AoNeighborInfo extends Enum<AoNeighborInfo> {
    static DOWN: AoNeighborInfo;
    static EAST: AoNeighborInfo;
    static NORTH: AoNeighborInfo;
    static SOUTH: AoNeighborInfo;
    static UP: AoNeighborInfo;
    static WEST: AoNeighborInfo;
    static get(paramarg0: Direction): AoNeighborInfo;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AoNeighborInfo;
    static values(): (Object | null)[];
    private constructor(arg2: Direction[], arg3: number)
    faces: Direction[];
    strength: number;
    calculateCornerWeights(arg0: number, arg1: number, arg2: number, arg3: number[]): void;
    getDepth(arg0: number, arg1: number, arg2: number): number;
    mapCorners(arg0: number[], arg1: number[], arg2: number[], arg3: number[]): void;
    name(): "DOWN" | "UP" | "NORTH" | "SOUTH" | "WEST" | "EAST";
}