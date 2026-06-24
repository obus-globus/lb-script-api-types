import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { ServerLevelAccessor } from '../../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StructurePlaceSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructurePlaceSettings.d.ts'
import type { StructureProcessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessor.d.ts'
import type { StructureTemplate$StructureBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$StructureBlockInfo.d.ts'
export class BlockAgeProcessor extends Object implements StructureProcessor {
    static MAP_CODEC: MapCodec<BlockAgeProcessor>;
    constructor(mossiness: number)
    // private mossiness: number;
    codec(): MapCodec<BlockAgeProcessor>;
    evaluatesEntirePieceState(): boolean;
    finalizeProcessing(level: ServerLevelAccessor, position: BlockPos, referencePos: BlockPos, originalBlockInfoList: StructureTemplate$StructureBlockInfo[], processedBlockInfoList: StructureTemplate$StructureBlockInfo[], settings: StructurePlaceSettings): StructureTemplate$StructureBlockInfo[];
    // private getRandomBlock(random: RandomSource, nonMossyBlocks: BlockState[], mossyBlocks: BlockState[]): BlockState;
    // private maybeReplaceFullStoneBlock(random: RandomSource): BlockState;
    // private maybeReplaceObsidian(random: RandomSource): BlockState;
    // private maybeReplaceSlab(blockState: BlockState, random: RandomSource): BlockState;
    // private maybeReplaceStairs(blockState: BlockState, random: RandomSource): BlockState;
    // private maybeReplaceWall(blockState: BlockState, random: RandomSource): BlockState;
    processBlock(level: LevelReader, targetPosition: BlockPos, referencePos: BlockPos, templateRelativePos: BlockPos, processedBlockInfo: StructureTemplate$StructureBlockInfo, settings: StructurePlaceSettings): StructureTemplate$StructureBlockInfo;
}