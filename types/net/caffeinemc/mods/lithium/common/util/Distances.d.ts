import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export class Distances extends Object {
    static distanceSq(paramarg0: BlockPos, paramarg1: BlockPos): number;
    static distanceSqInt(paramarg0: BlockPos, paramarg1: BlockPos): number;
    static getClosestBlockCoordInSection(paramarg0: number, paramarg1: number): number;
    static getClosestPosInChunk(paramarg0: BlockPos, paramarg1: number, paramarg2: number): BlockPos;
    static getMinChunkToBlockDistanceL2Sq(paramarg0: BlockPos, paramarg1: number, paramarg2: number): number;
    static getMinSectionDistanceSq(paramarg0: BlockPos, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static isWithinCubeRadius(paramarg0: BlockPos, paramarg1: number, paramarg2: BlockPos): boolean;
    static isWithinSphereRadius(paramarg0: BlockPos, paramarg1: number, paramarg2: BlockPos): boolean;
    constructor()
}