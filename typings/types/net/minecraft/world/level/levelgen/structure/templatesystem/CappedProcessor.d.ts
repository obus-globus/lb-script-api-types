import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { ServerLevelAccessor } from '../../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { StructurePlaceSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructurePlaceSettings.d.ts'
import type { StructureProcessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessor.d.ts'
import type { StructureTemplate$StructureBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$StructureBlockInfo.d.ts'
export class CappedProcessor extends Object implements StructureProcessor {
    static MAP_CODEC: MapCodec<CappedProcessor>;
    constructor(delegate: StructureProcessor, limit: IntProvider)
    // private delegate: StructureProcessor;
    // private limit: IntProvider;
    codec(): MapCodec<CappedProcessor>;
    evaluatesEntirePieceState(): boolean;
    finalizeProcessing(level: ServerLevelAccessor, position: BlockPos, referencePos: BlockPos, originalBlockInfoList: StructureTemplate$StructureBlockInfo[], processedBlockInfoList: StructureTemplate$StructureBlockInfo[], settings: StructurePlaceSettings): StructureTemplate$StructureBlockInfo[];
    processBlock(level: LevelReader, targetPosition: BlockPos, referencePos: BlockPos, templateRelativePos: BlockPos, processedBlockInfo: StructureTemplate$StructureBlockInfo, settings: StructurePlaceSettings): StructureTemplate$StructureBlockInfo;
}