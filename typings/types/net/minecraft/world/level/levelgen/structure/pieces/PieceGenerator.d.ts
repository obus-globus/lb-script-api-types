import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { PieceGenerator$Context } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/PieceGenerator$Context.d.ts'
import type { StructurePiecesBuilder } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePiecesBuilder.d.ts'
export interface PieceGenerator<C extends FeatureConfiguration> extends Object{
    generatePieces(builder: StructurePiecesBuilder, context: PieceGenerator$Context<C>): void;
}