import type { Transformation } from '../../../../../../../../com/mojang/math/Transformation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MutableQuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableQuadView.d.ts'
import type { QuadAtlas } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadAtlas.d.ts'
import type { QuadTransform } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadTransform.d.ts'
import type { SpriteFinder } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinder.d.ts'
import type { SpriteFinderGetter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinderGetter.d.ts'
import type { ModelState } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
export class ModelStateHelper extends Object {
    static asQuadTransform(paramarg0: ModelState, paramarg1: (param0: QuadAtlas) => SpriteFinder): (param0: MutableQuadView) => boolean;
    static multiply(paramarg0: ModelState, paramarg1: ModelState): ModelState;
    static of(paramarg0: Transformation, paramarg1: boolean): ModelState;
    private constructor()
}