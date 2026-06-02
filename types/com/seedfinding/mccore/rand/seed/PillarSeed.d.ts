import type { SeedIterator } from '../../../../../com/seedfinding/mccore/util/data/SeedIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PillarSeed extends Object {
    static fromPillarHeights(paramarg0: number[]): number[];
    static fromStructureSeed(paramarg0: number): number;
    static getPillarHeights(paramarg0: number): number[];
    static getStructureSeeds(paramarg0: number): SeedIterator;
    static iterator(): SeedIterator;
    constructor()
}