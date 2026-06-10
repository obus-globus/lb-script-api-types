import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { PieceGenerator } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/PieceGenerator.d.ts'
import type { PieceGenerator$Context } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/PieceGenerator$Context.d.ts'
import type { PieceGeneratorSupplier$Context } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/PieceGeneratorSupplier$Context.d.ts'
import type { StructurePiecesBuilder } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePiecesBuilder.d.ts'
export interface PieceGeneratorSupplier<C extends FeatureConfiguration> extends Object {
    createGenerator(context: PieceGeneratorSupplier$Context<C>): Optional<(param0: StructurePiecesBuilder, param1: PieceGenerator$Context<C>) => void>;
}