import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { ServerLevelAccessor } from '../../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { StructurePlaceSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructurePlaceSettings.d.ts'
import type { StructureProcessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessor.d.ts'
import type { StructureTemplate$StructureBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$StructureBlockInfo.d.ts'
export class ProtectedBlockProcessor extends Record implements StructureProcessor {
    static MAP_CODEC: MapCodec<ProtectedBlockProcessor>;
    constructor(cannotReplace: Holder<Block>[])
    // private cannotReplace: Holder<Block>[];
    cannotReplace(): Holder<Block>[];
    codec(): MapCodec<ProtectedBlockProcessor>;
    equals(o: Object | null): boolean;
    evaluatesEntirePieceState(): boolean;
    finalizeProcessing(level: ServerLevelAccessor, position: BlockPos, referencePos: BlockPos, originalBlockInfoList: StructureTemplate$StructureBlockInfo[], processedBlockInfoList: StructureTemplate$StructureBlockInfo[], settings: StructurePlaceSettings): StructureTemplate$StructureBlockInfo[];
    hashCode(): number;
    processBlock(level: LevelReader, targetPosition: BlockPos, referencePos: BlockPos, templateRelativePos: BlockPos, processedBlockInfo: StructureTemplate$StructureBlockInfo, settings: StructurePlaceSettings): StructureTemplate$StructureBlockInfo;
    toString(): string;
}