import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LevelHeightAccessor } from '../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
export class Pos$SectionYIndex extends Object {
    static fromBlockCoord(paramarg0: LevelHeightAccessor, paramarg1: number): number;
    static fromSectionCoord(paramarg0: LevelHeightAccessor, paramarg1: number): number;
    static getMaxYSectionIndexExclusive(paramarg0: LevelHeightAccessor): number;
    static getMaxYSectionIndexInclusive(paramarg0: LevelHeightAccessor): number;
    static getMinYSectionIndex(paramarg0: LevelHeightAccessor): number;
    static getNumYSections(paramarg0: LevelHeightAccessor): number;
    constructor()
}