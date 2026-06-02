import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadAtlas } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadAtlas.d.ts'
import type { SpriteFinder } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinder.d.ts'
export interface SpriteFinderGetter extends Object{
    spriteFinder(arg0: QuadAtlas): SpriteFinder;
}