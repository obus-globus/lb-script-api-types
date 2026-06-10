import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { StructurePlaceSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructurePlaceSettings.d.ts'
import type { StructureProcessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessor.d.ts'
import type { StructureProcessorType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessorType.d.ts'
import type { StructureTemplate$StructureBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$StructureBlockInfo.d.ts'
export class BlockRotProcessor extends StructureProcessor {
    static CODEC: MapCodec<BlockRotProcessor>;
    private constructor(blockTagKey: Optional<Holder<Block>[]>, integrity: number)
    constructor(integrity: number)
    constructor(tag: Holder<Block>[], integrity: number)
    // private integrity: number;
    // private rottableBlocks: Optional<Holder<Block>[]>;
    getType(): StructureProcessorType<Object>;
    processBlock(level: LevelReader, targetPosition: BlockPos, referencePos: BlockPos, originalBlockInfo: StructureTemplate$StructureBlockInfo, processedBlockInfo: StructureTemplate$StructureBlockInfo, settings: StructurePlaceSettings): StructureTemplate$StructureBlockInfo;
}