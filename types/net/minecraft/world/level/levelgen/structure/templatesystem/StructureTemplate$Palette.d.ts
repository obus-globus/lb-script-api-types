import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { StructureTemplate$JigsawBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$JigsawBlockInfo.d.ts'
import type { StructureTemplate$StructureBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$StructureBlockInfo.d.ts'
export class StructureTemplate$Palette extends Object {
    private constructor(blocks: StructureTemplate$StructureBlockInfo[])
    // private blocks: StructureTemplate$StructureBlockInfo[];
    // private cache: Map<Block, StructureTemplate$StructureBlockInfo[]>;
    // private cachedJigsaws: StructureTemplate$JigsawBlockInfo[];
    blocks(): StructureTemplate$StructureBlockInfo[];
    blocks(filter: Block): StructureTemplate$StructureBlockInfo[];
    jigsaws(): StructureTemplate$JigsawBlockInfo[];
}