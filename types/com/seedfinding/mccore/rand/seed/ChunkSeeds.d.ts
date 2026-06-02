import type { MCVersion } from '../../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ChunkSeeds extends Object {
    static getCarverSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: MCVersion): number;
    static getDecoratorSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: MCVersion): number;
    static getDecoratorSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: MCVersion): number;
    static getPopulationSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: MCVersion): number;
    static getRegionSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: MCVersion): number;
    static getSlimeSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: MCVersion): number;
    static getSlimeSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: MCVersion): number;
    static getTerrainSeed(paramarg0: number, paramarg1: number, paramarg2: MCVersion): number;
    static getWeakSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: MCVersion): number;
    constructor()
}