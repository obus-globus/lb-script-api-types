import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { EndCityPieces$EndCityPiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/EndCityPieces$EndCityPiece.d.ts'
import type { StructureTemplateManager } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export interface EndCityPieces$SectionGenerator extends Object{
    generate(structureTemplateManager: StructureTemplateManager, genDepth: number, parent: EndCityPieces$EndCityPiece, offset: BlockPos, pieces: StructurePiece[], random: RandomSource): boolean;
    init(): void;
}