import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Rotation } from '../../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { WoodlandMansionPieces$WoodlandMansionPiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/WoodlandMansionPieces$WoodlandMansionPiece.d.ts'
import type { StructureTemplateManager } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class WoodlandMansionPieces extends Object {
    static generateMansion(paramstructureTemplateManager: StructureTemplateManager, paramorigin: BlockPos, paramrotation: Rotation, parampieces: WoodlandMansionPieces$WoodlandMansionPiece[], paramrandom: RandomSource): void;
    constructor()
}