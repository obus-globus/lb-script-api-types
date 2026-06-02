import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
export interface LevelHeightAccessor extends Object{
    getHeight(): number;
    getMaxSectionY(): number;
    getMaxY(): number;
    getMinSectionY(): number;
    getMinY(): number;
    getSectionIndex(blockY: number): number;
    getSectionIndexFromSectionY(sectionY: number): number;
    getSectionYFromSectionIndex(sectionIndex: number): number;
    getSectionsCount(): number;
    isInsideBuildHeight(blockY: number): boolean;
    isInsideBuildHeight(pos: BlockPos): boolean;
    isOutsideBuildHeight(blockY: number): boolean;
    isOutsideBuildHeight(pos: BlockPos): boolean;
}