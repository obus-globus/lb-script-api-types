import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/MutableQuadViewImpl.d.ts'
import type { Renderer } from '../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/Renderer.d.ts'
import type { MutableMesh } from '../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableMesh.d.ts'
import type { MutableQuadView } from '../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableQuadView.d.ts'
import type { QuadEmitter } from '../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { AltModelBlockRenderer } from '../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/render/AltModelBlockRenderer.d.ts'
import type { BlockColors } from '../../../../../../../net/minecraft/client/color/block/BlockColors.d.ts'
export class SodiumRenderer extends Object implements Renderer {
    static BUFFERER: (param0: MutableQuadViewImpl) => void;
    static INSTANCE: SodiumRenderer;
    static get(): Renderer;
    static register(paramarg0: Renderer): void;
    private constructor()
    altModelBlockRenderer(arg0: boolean, arg1: boolean, arg2: BlockColors): AltModelBlockRenderer;
    mutableMesh(): MutableMesh;
    quadEmitter(arg0: (param0: MutableQuadView) => void): QuadEmitter;
}