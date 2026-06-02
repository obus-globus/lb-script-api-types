import type { SeedIterator } from '../../../../../com/seedfinding/mccore/util/data/SeedIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StructureSeed extends Object {
    static getWorldSeeds(paramarg0: number): SeedIterator;
    static iterator(): SeedIterator;
    static toPillarSeed(paramarg0: number): number;
    static toRandomWorldSeeds(paramarg0: number): number[];
    static toWorldSeed(paramarg0: number, paramarg1: number): number;
    constructor()
}