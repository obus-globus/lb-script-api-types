import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LithiumSectionData$SectionData } from '../../../../../../../net/caffeinemc/mods/lithium/common/world/section/LithiumSectionData$SectionData.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunkSection } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
import type { PalettedContainer } from '../../../../../../../net/minecraft/world/level/chunk/PalettedContainer.d.ts'
export class RandomTickingSectionDataHelper extends Object {
    static BYTE_COUNT: number;
    static LAST_MINISECTION_SIZE: number;
    static MINISECTIONS_PER_BYTE: number;
    static MINISECTION_BITS: number;
    static MINISECTION_COUNT: number;
    static MINISECTION_SIZE: number;
    static RANDOM_TICKING_FLAG_MASK: number;
    static addAt(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static getMinisectionIndex(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static handleSectionSingleBlockState(paramarg0: BlockState, paramarg1: number[]): void;
    static initDataForAllRandomTickingSection(paramarg0: number[]): void;
    static initDataForAllRandomTickingSection(paramarg0: LithiumSectionData$SectionData): void;
    static initNonRandomTickingSection(paramarg0: number[]): void;
    static initNonRandomTickingSection(paramarg0: LithiumSectionData$SectionData): void;
    static naiveInitializeData(paramarg0: PalettedContainer<BlockState>, paramarg1: number[]): void;
    static randomTickNthBlock(paramarg0: LevelChunkSection, paramarg1: number, paramarg2: number[], paramarg3: ServerLevel, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: RandomSource): void;
    static removeAt(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static unpackX(paramarg0: number): number;
    static unpackY(paramarg0: number): number;
    static unpackZ(paramarg0: number): number;
    constructor()
}