import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { StructurePlaceSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructurePlaceSettings.d.ts'
import type { StructureProcessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessor.d.ts'
import type { StructureProcessorType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessorType.d.ts'
import type { StructureTemplate$StructureBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$StructureBlockInfo.d.ts'
export class JigsawReplacementProcessor extends StructureProcessor {
    static CODEC: MapCodec<JigsawReplacementProcessor>;
    static INSTANCE: JigsawReplacementProcessor;
    private constructor()
    getType(): StructureProcessorType<any>;
    processBlock(level: LevelReader, targetPosition: BlockPos, referencePos: BlockPos, originalBlockInfo: StructureTemplate$StructureBlockInfo, processedBlockInfo: StructureTemplate$StructureBlockInfo, settings: StructurePlaceSettings): StructureTemplate$StructureBlockInfo;
}