import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LevelHeightAccessor } from '../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
export class Pos$BlockCoord extends Object {
    static getMaxInSectionCoord(paramarg0: number): number;
    static getMaxYExclusive(paramarg0: LevelHeightAccessor): number;
    static getMaxYInSectionIndex(paramarg0: LevelHeightAccessor, paramarg1: number): number;
    static getMaxYInclusive(paramarg0: LevelHeightAccessor): number;
    static getMinInSectionCoord(paramarg0: number): number;
    static getMinY(paramarg0: LevelHeightAccessor): number;
    static getMinYInSectionIndex(paramarg0: LevelHeightAccessor, paramarg1: number): number;
    static getYSize(paramarg0: LevelHeightAccessor): number;
    constructor()
}