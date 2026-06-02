import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadAtlas } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadAtlas.d.ts'
import type { SpriteFinder } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinder.d.ts'
import type { SpriteFinderGetter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinderGetter.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface FabricMaterialBaker extends Object, SpriteFinderGetter{
    spriteFinder(arg0: QuadAtlas): SpriteFinder;
    spriteFinder(arg0: Identifier): SpriteFinder;
}