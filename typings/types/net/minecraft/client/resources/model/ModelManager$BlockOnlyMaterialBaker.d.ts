import type { QuadAtlas } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadAtlas.d.ts'
import type { FabricMaterialBaker } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/FabricMaterialBaker.d.ts'
import type { SpriteFinder } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinder.d.ts'
import type { MissingSpriteFinderImpl } from '../../../../../net/fabricmc/fabric/impl/client/renderer/MissingSpriteFinderImpl.d.ts'
import type { SpriteLoader$Preparations } from '../../../../../net/minecraft/client/renderer/texture/SpriteLoader$Preparations.d.ts'
import type { Material } from '../../../../../net/minecraft/client/resources/model/sprite/Material.d.ts'
import type { Material$Baked } from '../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { MaterialBaker } from '../../../../../net/minecraft/client/resources/model/sprite/MaterialBaker.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ModelManager$BlockOnlyMaterialBaker extends MaterialBaker implements FabricMaterialBaker {
    constructor(blockAtlas: SpriteLoader$Preparations)
    // private blockAtlas: SpriteLoader$Preparations;
    // private missingSpriteFinder: MissingSpriteFinderImpl;
    bake(material: Material): Material$Baked;
    spriteFinder(arg0: QuadAtlas): SpriteFinder;
    spriteFinder(arg0: Identifier): SpriteFinder;
}