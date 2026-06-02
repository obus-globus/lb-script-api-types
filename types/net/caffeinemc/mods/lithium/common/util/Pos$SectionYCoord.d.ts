import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LevelHeightAccessor } from '../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
export class Pos$SectionYCoord extends Object {
    static fromBlockCoord(paramarg0: number): number;
    static fromSectionIndex(paramarg0: LevelHeightAccessor, paramarg1: number): number;
    static getMaxYSectionExclusive(paramarg0: LevelHeightAccessor): number;
    static getMaxYSectionInclusive(paramarg0: LevelHeightAccessor): number;
    static getMinYSection(paramarg0: LevelHeightAccessor): number;
    static getNumYSections(paramarg0: LevelHeightAccessor): number;
    constructor()
}