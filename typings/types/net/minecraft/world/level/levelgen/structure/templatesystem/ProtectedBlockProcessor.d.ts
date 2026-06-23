import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { StructurePlaceSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructurePlaceSettings.d.ts'
import type { StructureProcessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessor.d.ts'
import type { StructureProcessorType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessorType.d.ts'
import type { StructureTemplate$StructureBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$StructureBlockInfo.d.ts'
export class ProtectedBlockProcessor extends StructureProcessor {
    static CODEC: MapCodec<ProtectedBlockProcessor>;
    constructor(cannotReplace: TagKey<Block>)
    cannotReplace: TagKey<Block>;
    getType(): StructureProcessorType<any>;
    processBlock(level: LevelReader, targetPosition: BlockPos, referencePos: BlockPos, originalBlockInfo: StructureTemplate$StructureBlockInfo, processedBlockInfo: StructureTemplate$StructureBlockInfo, settings: StructurePlaceSettings): StructureTemplate$StructureBlockInfo;
}