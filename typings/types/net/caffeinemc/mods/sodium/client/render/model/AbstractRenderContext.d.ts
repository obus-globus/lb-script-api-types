import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/MutableQuadViewImpl.d.ts'
export abstract class AbstractRenderContext extends Object {
    constructor()
    getForEmitting(): MutableQuadViewImpl;
}