import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { QuadAtlas } from '../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadAtlas.d.ts'
import type { FabricMaterialBaker } from '../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/FabricMaterialBaker.d.ts'
import type { SpriteFinder } from '../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinder.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface MaterialBakerMixin extends Object, FabricMaterialBaker{
    spriteFinder(arg0: QuadAtlas): SpriteFinder;
    spriteFinder(arg0: Identifier): SpriteFinder;
}