import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { JigsawBlockEntity$JointType } from '../../../../../../../net/minecraft/world/level/block/entity/JigsawBlockEntity$JointType.d.ts'
import type { StructureTemplatePool } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
import type { StructureTemplate$StructureBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$StructureBlockInfo.d.ts'
export class StructureTemplate$JigsawBlockInfo extends Record {
    static of(paraminfo: StructureTemplate$StructureBlockInfo): StructureTemplate$JigsawBlockInfo;
    constructor(info: StructureTemplate$StructureBlockInfo, jointType: JigsawBlockEntity$JointType, name: Identifier, pool: ResourceKey<StructureTemplatePool>, target: Identifier, placementPriority: number, selectionPriority: number)
    // private info: StructureTemplate$StructureBlockInfo;
    // private jointType: JigsawBlockEntity$JointType;
    // private name: Identifier;
    // private placementPriority: number;
    // private pool: ResourceKey<StructureTemplatePool>;
    // private selectionPriority: number;
    // private target: Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    info(): StructureTemplate$StructureBlockInfo;
    jointType(): JigsawBlockEntity$JointType;
    name(): Identifier;
    placementPriority(): number;
    pool(): ResourceKey<StructureTemplatePool>;
    selectionPriority(): number;
    target(): Identifier;
    toString(): string;
    withInfo(info: StructureTemplate$StructureBlockInfo): StructureTemplate$JigsawBlockInfo;
}