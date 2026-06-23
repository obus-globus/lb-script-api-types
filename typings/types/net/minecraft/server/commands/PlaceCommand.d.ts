import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Mirror } from '../../../../net/minecraft/world/level/block/Mirror.d.ts'
import type { Rotation } from '../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { ConfiguredFeature } from '../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { Structure } from '../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructureTemplatePool } from '../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
export class PlaceCommand extends Object {
    static placeFeature(paramsource: CommandSourceStack, paramfeatureHolder: Holder$Reference<ConfiguredFeature<any, any>>, parampos: BlockPos): number;
    static placeJigsaw(paramsource: CommandSourceStack, parampool: Holder<StructureTemplatePool>, paramtarget: Identifier, parammaxDepth: number, parampos: BlockPos): number;
    static placeStructure(paramsource: CommandSourceStack, paramstructureHolder: Holder$Reference<Structure>, parampos: BlockPos): number;
    static placeTemplate(paramsource: CommandSourceStack, paramtemplate: Identifier, parampos: BlockPos, paramrotation: Rotation, parammirror: Mirror, paramintegrity: number, paramseed: number, paramstrict: boolean): number;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    constructor()
}