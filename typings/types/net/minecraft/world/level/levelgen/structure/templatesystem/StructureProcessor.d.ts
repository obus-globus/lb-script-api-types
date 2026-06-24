import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { ServerLevelAccessor } from '../../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { StructurePlaceSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructurePlaceSettings.d.ts'
import type { StructureTemplate$StructureBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$StructureBlockInfo.d.ts'
export interface StructureProcessor extends Object{
    codec(): MapCodec<StructureProcessor>;
    evaluatesEntirePieceState(): boolean;
    finalizeProcessing(level: ServerLevelAccessor, position: BlockPos, referencePos: BlockPos, originalBlockInfoList: StructureTemplate$StructureBlockInfo[], processedBlockInfoList: StructureTemplate$StructureBlockInfo[], settings: StructurePlaceSettings): StructureTemplate$StructureBlockInfo[];
    processBlock(level: LevelReader, targetPosition: BlockPos, referencePos: BlockPos, templateRelativePos: BlockPos, processedBlockInfo: StructureTemplate$StructureBlockInfo, settings: StructurePlaceSettings): StructureTemplate$StructureBlockInfo;
}