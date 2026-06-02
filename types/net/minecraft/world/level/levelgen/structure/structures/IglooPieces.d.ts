import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Rotation } from '../../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { StructurePieceAccessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePieceAccessor.d.ts'
import type { StructureTemplateManager } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class IglooPieces extends Object {
    static GENERATION_HEIGHT: number;
    static addPieces(paramstructureTemplateManager: StructureTemplateManager, paramposition: BlockPos, paramrotation: Rotation, paramstructurePieceAccessor: StructurePieceAccessor, paramrandom: RandomSource): void;
    constructor()
}