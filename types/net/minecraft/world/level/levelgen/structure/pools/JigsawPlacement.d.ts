import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Heightmap$Types } from '../../../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { Structure$GenerationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure$GenerationContext.d.ts'
import type { Structure$GenerationStub } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure$GenerationStub.d.ts'
import type { DimensionPadding } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/DimensionPadding.d.ts'
import type { StructureTemplatePool } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
import type { PoolAliasLookup } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/alias/PoolAliasLookup.d.ts'
import type { JigsawStructure$MaxDistance } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/JigsawStructure$MaxDistance.d.ts'
import type { LiquidSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/LiquidSettings.d.ts'
export class JigsawPlacement extends Object {
    static addPieces(paramcontext: Structure$GenerationContext, paramstartPool: Holder<StructureTemplatePool>, paramstartJigsaw: Optional<Identifier>, parammaxDepth: number, paramposition: BlockPos, paramdoExpansionHack: boolean, paramprojectStartToHeightmap: Optional<Heightmap$Types>, parammaxDistanceFromCenter: JigsawStructure$MaxDistance, parampoolAliasLookup: (param0: ResourceKey<StructureTemplatePool>) => net.minecraft.resources.ResourceKey<net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool>, paramdimensionPadding: DimensionPadding, paramliquidSettings: LiquidSettings): Optional<Structure$GenerationStub>;
    static generateJigsaw(paramlevel: ServerLevel, parampool: Holder<StructureTemplatePool>, paramtarget: Identifier, parammaxDepth: number, paramposition: BlockPos, paramkeepJigsaws: boolean): boolean;
    constructor()
}