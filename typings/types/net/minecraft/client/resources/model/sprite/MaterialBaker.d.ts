import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Multimap } from '../../../../../../com/google/common/collect/Multimap.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { QuadAtlas } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadAtlas.d.ts'
import type { FabricMaterialBaker } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/FabricMaterialBaker.d.ts'
import type { SpriteFinder } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinder.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { ModelDebugName } from '../../../../../../net/minecraft/client/resources/model/ModelDebugName.d.ts'
import type { Material } from '../../../../../../net/minecraft/client/resources/model/sprite/Material.d.ts'
import type { Material$Baked } from '../../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { TextureSlots } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class MaterialBaker extends Object implements FabricMaterialBaker {
    constructor(missingSprite: TextureAtlasSprite)
    // private bakedMaterials: JavaMap<Material, Material$Baked>;
    // private bakerFunction: (param0: Material) => Material$Baked;
    // private missingReferences: Multimap<string, string>;
    // private missingSprite: Material$Baked;
    // private missingSpriteForceTranslucent: Material$Baked;
    // private missingSprites: Multimap<string, Identifier>;
    bake(material: Material): Material$Baked;
    get(material: Material, name: () => string): Material$Baked;
    logMissingTextures(): void;
    replacementForMissingMaterial(material: Material): Material$Baked;
    reportMissingReference(reference: string, responsibleModel: () => string): Material$Baked;
    resolveSlot(slots: TextureSlots, id: string, name: () => string): Material$Baked;
    spriteFinder(arg0: QuadAtlas): SpriteFinder;
    spriteFinder(arg0: Identifier): SpriteFinder;
}